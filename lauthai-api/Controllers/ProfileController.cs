using System.Linq;
using System.Threading.Tasks;
using lauthai_api.Data;
using lauthai_api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        public async Task<IActionResult> GetProfile()
        {
            var profiles = await _context.Profiles.Include(u => u.University).ToListAsync();
            return Ok(profiles);
        }
    }
}