using System.Collections.Generic;
using System.Linq;
using lauthai_api.Models;
using Newtonsoft.Json;

namespace lauthai_api.DataAccessLayer.Data
{
    public class Seed
    {
        private readonly LauThaiDbContext _context;
        public Seed(LauThaiDbContext context)
        {
            _context = context;
        }

        public void SeedProfiles()
        {
            if (!_context.Profiles.Any())
            {
                var universityData = System.IO.File.ReadAllText("DataAccessLayer/Profiles.json");
                var universities = JsonConvert.DeserializeObject<List<University>>(universityData);
                foreach (var uni in universities)
                    _context.Add(uni);

                _context.SaveChanges();
            }
            if (!_context.Categories.Any())
            {
                var profiles = _context.Profiles.ToList();

                var CaoCapCategory = new Category
                {
                    NameCategory = "Cao cấp"
                };

                var ThuongCategory = new Category
                {
                    NameCategory = "Thường"
                };
                foreach (var pf in profiles)
                {
                    if (pf.Id % 2 == 0)
                    {
                        CaoCapCategory.Profiles.Add(pf);
                    }
                    else
                        ThuongCategory.Profiles.Add(pf);
                }
                _context.Add(CaoCapCategory);
                _context.Add(ThuongCategory);
                _context.SaveChanges();
            }
        }
    }
}