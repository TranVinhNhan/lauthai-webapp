using System.Threading.Tasks;
using AutoMapper;
using lauthai_api.DataAccessLayer;
using lauthai_api.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using System.IO;
using lauthai_api.Models;
using System.Linq;
using System;

namespace lauthai_api.Controllers
{
    [Authorize(Roles = "Admin")]
    [ApiController]
    [Route("api/[controller]")]
    public class ProfileController : ControllerBase
    {
        private readonly ILauThaiRepository _repo;
        private readonly IMapper _mapper;
        private readonly IHostEnvironment _hostingEnv;

        public ProfileController(
            ILauThaiRepository repo,
            IMapper mapper,
            IHostEnvironment hostingEnv
            )
        {
            _repo = repo;
            _mapper = mapper;
            _hostingEnv = hostingEnv;
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
            var profile = _mapper.Map<Models.Profile>(profileToCreateDto);
            var uni = await _repo.GetUniversityById(profileToCreateDto.UniversityId);
            if (uni == null)
            {
                return NotFound();
            }
            uni.Profiles.Add(profile);
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

        [HttpPost("{id}/images")]
        public async Task<IActionResult> UploadImages(int id, [FromForm] List<IFormFile> uploadFiles)
        {
            var profile = await _repo.GetProfileById(id);
            if (profile == null)
                return NotFound();

            foreach (var formFile in uploadFiles)
            {
                if (formFile.Length > 0 || formFile != null)
                {
                    var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/img", formFile.FileName);
                    using (var fileStream = new FileStream(path, FileMode.Create))
                    {
                        await formFile.CopyToAsync(fileStream);
                        if (!profile.Images.Any())
                        {
                            var img = new Image
                            {
                                Url = ImageServer.ServerUrl + "/" + formFile.FileName,
                                IsMainPfp = true
                            };

                            profile.Images.Add(img);
                        }
                        else
                        {
                            var img = new Image
                            {
                                Url = ImageServer.ServerUrl + "/" + formFile.FileName,
                                IsMainPfp = false
                            };

                            profile.Images.Add(img);
                        }
                    }
                }
            }
            if (await _repo.SaveAll())
                return StatusCode(201);

            throw new Exception("Cannot upload image");
        }

        [HttpDelete("{profileId}/images/{imgId}")]
        public async Task<IActionResult> DeleteImage(int profileId, int imgId)
        {
            var profile = await _repo.GetProfileById(profileId);
            if (profile == null)
                return NotFound();

            profile.Images.Remove(profile.Images.FirstOrDefault(img => img.Id == imgId));
            if (profile.Images.Any() && !profile.Images.Any(img => img.IsMainPfp))
            {
                profile.Images.First().IsMainPfp = true;
            }
            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception("Cannot delete image");
        }
    }
}