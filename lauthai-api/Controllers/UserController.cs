using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using lauthai_api.DataAccessLayer;
using lauthai_api.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace lauthai_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILauThaiRepository _repo;
        private readonly IMapper _mapper;
        public UserController(ILauThaiRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _repo.GetAllUsers();
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
            var user = await _repo.GetUserById(id);
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

                var user = await _repo.GetUserById(id);
                if (user == null)
                    return NotFound();

                _mapper.Map(userToUpdateDto, user);
                await _repo.SaveAll();

                return NoContent();
            }
            return Unauthorized();
        }
    }
}