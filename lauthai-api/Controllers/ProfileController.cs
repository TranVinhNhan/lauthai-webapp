using System.Linq;
using lauthai_api.Data;
using lauthai_api.Models;
using Microsoft.AspNetCore.Mvc;

namespace lauthai_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfileController : ControllerBase
    {
        private readonly LauThaiDbContext _context;
        public ProfileController(LauThaiDbContext context)
        {
            _context = context;

        }
        
        [HttpGet]
        public IActionResult GetProfile()
        {
            var profiles = _context.Profiles.ToList();
            return Ok(profiles);
        }
    }
}