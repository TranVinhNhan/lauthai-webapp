using System.Threading.Tasks;
using lauthai_api.DataAccessLayer;
using Microsoft.AspNetCore.Mvc;

namespace lauthai_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UniversityController : ControllerBase
    {
        private readonly ILauThaiRepository _repo;
        public UniversityController(ILauThaiRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAllUniversities()
        {
            var universities = await _repo.GetAllUni();

            if (universities != null)
                return Ok(universities);

            return NotFound();
        }
    }
}