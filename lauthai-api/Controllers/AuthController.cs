using System.Threading.Tasks;
using AutoMapper;
using lauthai_api.DataAccessLayer;
using lauthai_api.DataAccessLayer.Repository.Interfaces;
using lauthai_api.Dtos;
using lauthai_api.Models;
using lauthai_api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace lauthai_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _auth;
        private readonly IUserService _userService;
        private readonly IMapper _mapper;
        private readonly IConfiguration _config;
        public AuthController(
            IAuthService auth,
            IUserService userService,
            IMapper mapper,
            IConfiguration config)
        {
            _auth = auth;
            _userService = userService;
            _mapper = mapper;
            _config = config;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserToCreateDto userToCreateDto)
        {
            if (await _userService.IsUsernameAlreadyExist(userToCreateDto.Username))
                return BadRequest("Tên đăng nhập đã tồn tại, vui lòng thử lại");

            var user = _mapper.Map<User>(userToCreateDto);
            await _auth.Register(user, userToCreateDto.Password);
            return StatusCode(201);
        }

        [HttpPost("register/admin")]
        public async Task<IActionResult> RegisterAdminAccount(AdminToCreateDto adminToCreateDto)
        {
            if (adminToCreateDto.AuthPassword == "createAdmin")
            {
                if (await _userService.IsUsernameAlreadyExist(adminToCreateDto.Username))
                    return BadRequest("Tên đăng nhập đã tồn tại, vui lòng thử lại");

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
            return Ok(new { token = _auth.GetTokenString(user) });
        }
    }
}