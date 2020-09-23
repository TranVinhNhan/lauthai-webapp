using System.Threading.Tasks;
using AutoMapper;
using lauthai_api.DataAccessLayer;
using lauthai_api.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace lauthai_api.Controllers
{
    [Authorize(Roles = "Admin")]
    [ApiController]
    [Route("api/[controller]")]
    public class ProfileController : ControllerBase
    {
        private readonly ILauThaiRepository _repo;
        private readonly IMapper _mapper;

        public ProfileController(ILauThaiRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [AllowAnonymous]
        [HttpGet("all")]
        public async Task<IActionResult> GetAllProfiles()
        {
            var profiles = await _repo.GetAllProfiles();

            if (profiles != null)
                return Ok(profiles);
            return NotFound();
        }

        [AllowAnonymous]
        [HttpGet("{id}", Name = "GetProfileById")]
        public async Task<IActionResult> GetProfileById(int id)
        {
            var profile = await _repo.GetProfileById(id);
            if (profile == null)
                return NotFound();

            return Ok(profile);
        }

        [HttpPost]
        public async Task<IActionResult> AddProfile(ProfileToCreateDto profileToCreateDto)
        {
            if (profileToCreateDto.UniversityId.HasValue)
            {
                var uni = await _repo.GetUniversityById(profileToCreateDto.UniversityId.Value);
                if (uni == null)
                {
                    return NotFound();
                }

                var newProfile = _mapper.Map<Models.Profile>(profileToCreateDto);
                uni.Profiles.Add(newProfile);

                var profileToReturn = new Models.Profile();

                if (await _repo.SaveAll())
                {
                    return CreatedAtRoute("GetProfileById", new { newProfile.Id }, newProfile);
                }
            }

            var profile = _mapper.Map<Models.Profile>(profileToCreateDto);
            _repo.Add(profile);

            if (await _repo.SaveAll())
            {
                return CreatedAtRoute("GetProfileById", new { profile.Id }, profile);
            }

            throw new System.Exception("Cannot create profile");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProfile(int id, ProfileToUpdateDto profileToUpdateDto)
        {
            var profileNeedToUpdate = await _repo.GetProfileById(id);
            if (profileNeedToUpdate == null)
                return NotFound();

            _mapper.Map(profileToUpdateDto, profileNeedToUpdate);
            _repo.Update(profileNeedToUpdate);

            if (await _repo.SaveAll())
                return NoContent();

            throw new System.Exception("Cannot update profile");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProfile(int id)
        {
            var profile = await _repo.GetProfileById(id);
            if (profile != null)
            {
                _repo.Delete(profile);

                if (await _repo.SaveAll())
                    return NoContent();
            }

            throw new System.Exception("Cannot delete profile");
        }
    }
}