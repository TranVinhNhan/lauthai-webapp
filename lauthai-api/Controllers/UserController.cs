using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using lauthai_api.DataAccessLayer;
using lauthai_api.Dtos;
using lauthai_api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace lauthai_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;
        public UserController(IUserService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _userService.GetAllUsers();
            if (users != null)
            {
                var listUsers = _mapper.Map<IEnumerable<UserToReturnDto>>(users);
                return Ok(listUsers);
            }
            return NotFound();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {
            var user = await _userService.GetUserById(id);
            if (user != null)
            {
                var returnUser = _mapper.Map<UserToReturnDto>(user);
                return Ok(returnUser);
            }
            return NotFound();
        }

        [HttpPut]
        public async Task<IActionResult> UpdateUserInfo(UserToUpdateDto userToUpdateDto)
        {
            if (User.FindFirst(ClaimTypes.NameIdentifier) != null)
            {
                int id = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);

                var user = await _userService.GetUserById(id);
                if (user == null)
                    return NotFound();

                _mapper.Map(userToUpdateDto, user);
                await _userService.SaveAll();

                return NoContent();
            }
            return Unauthorized();
        }
    }
}