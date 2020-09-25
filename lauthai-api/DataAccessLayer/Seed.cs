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
<<<<<<< HEAD
                var universityData = System.IO.File.ReadAllText("DataAccessLayer/Profiles.json");
                var universities = JsonConvert.DeserializeObject<List<University>>(universityData);
                foreach (var uni in universities)
                    _context.Add(uni);
=======
                var data = System.IO.File.ReadAllText("DataAccessLayer/Profiles.json");
                var profiles = JsonConvert.DeserializeObject<List<Profile>>(data);
                foreach (var pf in profiles)
                {
                    _context.Add(pf);
                }
                _context.SaveChanges();
            }

            if (!_context.Universities.Any())
            {
                var profiles = _context.Profiles.ToList();
                var Huflit = new University
                {
                    Name = "HUFLIT"
                };

                var Hutect = new University
                {
                    Name = "HUTECH"
                };
>>>>>>> f9bc99b2711fa11666b3fa52a71346b0cc538d19

                foreach (var pf in profiles)
                {
                    if (pf.Id % 2 == 0)
                    {
                        Huflit.Profiles.Add(pf);
                    }
                    else
                    {
                        Hutect.Profiles.Add(pf);
                    }
                }
                _context.Add(Huflit);
                _context.Add(Hutect);
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