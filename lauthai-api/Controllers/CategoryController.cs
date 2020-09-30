using System.Threading.Tasks;
using lauthai_api.DataAccessLayer;
using lauthai_api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace lauthai_api.Controllers
{
   [ApiController]
    [Route("api/[controller]")]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _categoryService;
        public CategoryController(ICategoryService categoryService)

        {
            _categoryService = categoryService;
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAllCategories()
        {
            var categories= await _categoryService.GetAllCategories();

            if (categories != null)
                return Ok(categories);

            return NotFound();
        }
    }
}
