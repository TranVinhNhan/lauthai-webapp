using System.Collections.Generic;
using System.Linq;
using lauthai_api.DataAccessLayer.Repository.Interfaces;
using lauthai_api.Models;
using Newtonsoft.Json;

namespace lauthai_api.DataAccessLayer.Data
{
    public class Seed
    {
        private readonly LauThaiDbContext _context;
        private readonly IAuthRepository _authRepository;
        public Seed(LauThaiDbContext context, IAuthRepository authRepository)
        {
            _context = context;
            _authRepository = authRepository;
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
        }
    }
}