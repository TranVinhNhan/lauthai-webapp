using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using lauthai_api.DataAccessLayer;
using lauthai_api.Dtos;
using lauthai_api.Models;
using lauthai_api.DataAccessLayer.Repository.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using lauthai_api.DataAccessLayer.Repository;
using Microsoft.AspNetCore.Authorization;

namespace lauthai_api.Controllers
{
    [Authorize(Roles = "Admin")]
    [ApiController]
    [Route("api/[controller]")]
    public class ProfileController : ControllerBase
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

        public ProfileController(IUnitOfWork uow, IMapper mapper)
        {
            _uow = uow;
            _mapper = mapper;
        }

        [AllowAnonymous]
        [HttpGet("all")]
        public async Task<IActionResult> GetAllProfiles() //lấy tất cả sinh viên  , async bất đồ bộ cho cả hàm , Task : kiểu trả về bất đồng bộ 
        {
            var profiles = await _uow.ProfileRepository.GetAllProfiles();

            if (profiles != null)
                return Ok(profiles);// OK là bộ phản hồi của .net
            return NotFound();


        }
        [HttpPost]
        public async Task<IActionResult> AddProfile(ProfileToCreateDto profileToCreateDto)
        {
            if (profileToCreateDto.UniversityId.HasValue)
            {
                var uni = await _uow.UniversityRepository.GetUniversityById(profileToCreateDto.UniversityId.Value);
                if (uni == null)
                {
                    return NotFound();
                }

                var newProfile = _mapper.Map<Models.Profile>(profileToCreateDto);
                uni.Profiles.Add(newProfile);

                if (await _uow.SaveAll())
                {
                    return StatusCode(201);
                }
            }

            var profile = _mapper.Map<Models.Profile>(profileToCreateDto);
            _uow.ProfileRepository.Add(profile);

            if (await _uow.SaveAll())
            {
                return StatusCode(201);
            }

            return BadRequest("Cannot create profile");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProfile(int id, ProfileToUpdateDto profileToUpdateDto)
        {
            var profileNeedToUpdate = await _uow.ProfileRepository.GetProfileById(id);
            if (profileNeedToUpdate == null)
                return NotFound();

            _mapper.Map(profileToUpdateDto, profileNeedToUpdate);
            _uow.ProfileRepository.Update(profileNeedToUpdate);

            if (await _uow.SaveAll())
                return Ok("Profile updated successfully");

            return BadRequest("Cannot update new profile");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProfile(int id)
        {
            var profile = await _uow.ProfileRepository.GetProfileById(id);

            if (profile != null)
            {
                _uow.ProfileRepository.Delete(profile);

                if (await _uow.SaveAll())
                    return NoContent();
            }

            return BadRequest("Cannot delete profile");
        }
    }
}