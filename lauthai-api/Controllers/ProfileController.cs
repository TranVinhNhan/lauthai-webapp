using System.Linq;
using System.Threading.Tasks;
using lauthai_api.Data;
using lauthai_api.Models;
using lauthai_api.Repository.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace lauthai_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfileController : ControllerBase
    {
        private readonly IProfileRepository _profileRepo;
        public ProfileController(IProfileRepository profileRepo)
        {
            _profileRepo = profileRepo;
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetProfile()
        {
            var profiles = await _profileRepo.GetAllProfiles();

            if (profiles != null)
                return Ok(profiles);

            return NotFound();
        }
    }
}