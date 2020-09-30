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
using lauthai_api.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace lauthai_api.Controllers
{
    [Authorize(Roles = "Admin")]
    [ApiController]
    [Route("api/[controller]")]
    public class ProfileController : ControllerBase
    {
        private readonly IProfileService _profileService;
        private readonly IUniversityService _universityService;
        private readonly ICategoryService _categoryService;
        private readonly IMapper _mapper;
        //private readonly IHostEnvironment _hostingEnv;

        public ProfileController(
            IProfileService profileService,
            IUniversityService universityService,
            ICategoryService categoryService,
            IMapper mapper
            //IHostEnvironment hostingEnv
            )
        {
            _profileService = profileService;
            _universityService = universityService;
            _categoryService = categoryService;
            _mapper = mapper;
            //_hostingEnv = hostingEnv;
        }

        [AllowAnonymous]
        [HttpGet("all")]
        public async Task<IActionResult> GetAllProfiles()
        {
            var query = await _profileService.GetAllProfiles();
            var profiles = await query.Include(p => p.Category).Include(p => p.Images).Include(p => p.University).ToListAsync();

            if (profiles != null)
                return Ok(profiles);
            return NotFound();
        }

        [AllowAnonymous]
        [HttpGet("{id}", Name = "GetProfileById")]
        public async Task<IActionResult> GetProfileById(int id)
        {
            var profile = await _profileService.GetProfileById(id);
            if (profile == null)
                return NotFound();

            return Ok(profile);
        }

        [HttpPost]
        public async Task<IActionResult> AddProfile(ProfileToCreateDto profileToCreateDto)
        {
            var profile = _mapper.Map<Models.Profile>(profileToCreateDto);
            var uni = await _universityService.GetUniversityById(profileToCreateDto.UniversityId);
            var cat = await _categoryService.GetCategoryById(profileToCreateDto.CategoryId);
            if (uni == null || cat == null)
            {
                return NotFound();
            }
            uni.Profiles.Add(profile);
            cat.Profiles.Add(profile);
            if (await _profileService.SaveAll())
            {
                return CreatedAtRoute("GetProfileById", new { profile.Id }, profile);
            }

            throw new System.Exception("Cannot create profile");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProfile(int id, ProfileToUpdateDto profileToUpdateDto)
        {
            var profileNeedToUpdate = await _profileService.GetProfileById(id);
            if (profileNeedToUpdate == null)
                return NotFound();

            _mapper.Map(profileToUpdateDto, profileNeedToUpdate);
            _profileService.Update(profileNeedToUpdate);

            if (await _profileService.SaveAll())
                return NoContent();

            throw new System.Exception("Cannot update profile");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProfile(int id)
        {
            var profile = await _profileService.GetProfileById(id);
            if (profile != null)
            {
                _profileService.Delete(profile);

                if (await _profileService.SaveAll())
                    return NoContent();
            }

            throw new System.Exception("Cannot delete profile");
        }

        [HttpPost("{id}/images")]
        public async Task<IActionResult> UploadImages(int id, [FromForm] List<IFormFile> uploadFiles)
        {
            var profile = await _profileService.GetProfileById(id);
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
            if (await _profileService.SaveAll())
                return StatusCode(201);

            throw new Exception("Cannot upload image"); // throw new exception will hide all the stacktraces and messages
        }

        [HttpDelete("{profileId}/images/{imgId}")]
        public async Task<IActionResult> DeleteImage(int profileId, int imgId)
        {
            var profile = await _profileService.GetProfileById(profileId);
            if (profile == null)
                return NotFound();

            profile.Images.Remove(profile.Images.FirstOrDefault(img => img.Id == imgId));
            if (profile.Images.Any() && !profile.Images.Any(img => img.IsMainPfp))
            {
                profile.Images.First().IsMainPfp = true;
            }
            if (await _profileService.SaveAll())
                return NoContent();

            throw new Exception("Cannot delete image");
        }
    }
}