using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace lauthai_api.Controllers
{
    public class FallbackController: Controller
    {
        public IActionResult Index()
        {
            return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), 
                "wwwroot", "index.html"), "text/HTML");
        }
    }
}