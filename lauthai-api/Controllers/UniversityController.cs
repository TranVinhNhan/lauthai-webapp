using System.Threading.Tasks;
using lauthai_api.DataAccessLayer;
using lauthai_api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace lauthai_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UniversityController : ControllerBase
    {
        private readonly IUniversityService _universityService;

        public UniversityController(IUniversityService universityService)
        {
            _universityService = universityService;
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAllUniversities()
        {
            var query = await _universityService.GetAllUniversities();
            var universities = query.Include(u => u.Profiles).AsNoTracking();
            if (universities != null)
                return Ok(universities);

            return NotFound();
        }
    }
}