using System.Threading.Tasks;
using lauthai_api.DataAccessLayer.Repository;
using Microsoft.AspNetCore.Mvc;

namespace lauthai_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UniversityController : ControllerBase
    {
        private readonly IUnitOfWork _uow;
        public UniversityController(IUnitOfWork uow)
        {
            _uow = uow;
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAllUniversities()
        {
            var universities = await _uow.UniversityRepository.GetAllUni();

            if (universities != null)
                return Ok(universities);

            return NotFound();
        }
    }
}