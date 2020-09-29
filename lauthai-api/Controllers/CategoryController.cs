using System.Threading.Tasks;
using lauthai_api.DataAccessLayer;
using Microsoft.AspNetCore.Mvc;

namespace lauthai_api.Controllers
{
   [ApiController]
    [Route("api/[controller]")]
    public class CategoryController : ControllerBase
    {
        private readonly ILauThaiRepository _repo;
        public CategoryController(ILauThaiRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAllCategories()
        {
            var categories= await _repo.GetAllCat();

            if (categories != null)
                return Ok(categories);

            return NotFound();
        }
    }
}
