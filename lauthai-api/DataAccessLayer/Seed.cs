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
        }
    }
}