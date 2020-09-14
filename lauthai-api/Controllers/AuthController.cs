using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using lauthai_api.DataAccessLayer.Repository.Interfaces;
using lauthai_api.Dtos;
using lauthai_api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace lauthai_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _auth;
        private readonly IMapper _mapper;
        private readonly IConfiguration _config;
        public AuthController(IAuthRepository auth, IMapper mapper, IConfiguration config)
        {
            _auth = auth;
            _mapper = mapper;
            _config = config;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserToCreateDto userToCreateDto)
        {
            if (await _auth.IsUserExist(userToCreateDto.Username))
                return BadRequest("Username already existed, please try again");

            var user = _mapper.Map<User>(userToCreateDto);
            await _auth.Register(user, userToCreateDto.Password);
            return Ok(user);
        }

        [HttpPost("register/admin")]
        public async Task<IActionResult> RegisterAdminAccount(AdminToCreateDto adminToCreateDto)
        {
            if (adminToCreateDto.AuthPassword == "createAdmin")
            {
                if (await _auth.IsUserExist(adminToCreateDto.Username))
                    return BadRequest("Username already existed, please try again");

                var admin = _mapper.Map<User>(adminToCreateDto);
                admin.Role = "Admin";
                await _auth.Register(admin, adminToCreateDto.Password);

                return StatusCode(201);
            }
            return Unauthorized();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserToLoginDto account)
        {
            var user = await _auth.Login(account.Username, account.Password);
            if (user == null)
                return Unauthorized("Sai tên đăng nhập hoặc mật khẩu, vui lòng thử lại");

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Role, user.Role)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new { token = tokenHandler.WriteToken(token) });
        }
    }
}