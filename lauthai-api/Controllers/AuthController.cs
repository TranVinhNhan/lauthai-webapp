using System.Threading.Tasks;
using AutoMapper;
using lauthai_api.DataAccessLayer.Repository.Interfaces;
using lauthai_api.Dtos;
using lauthai_api.Models;
using Microsoft.AspNetCore.Mvc;

namespace lauthai_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _auth;
        private readonly IMapper _mapper;
        public AuthController(IAuthRepository auth, IMapper mapper)
        {
            _auth = auth;
            _mapper = mapper;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserToCreateDto userToCreateDto)
        {
            if (await _auth.IsUserExist(userToCreateDto.Username))
                return BadRequest("Username existed, please try again");

            var user = _mapper.Map<User>(userToCreateDto);
            await _auth.Register(user, userToCreateDto.Password);
            return Ok(user);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserToLoginDto account)
        {
            var user = await _auth.Login(account.Username, account.Password);
            if (user != null)
                return Ok(user);

            return BadRequest("Wrong username or password, please try again");
        }
    }
}