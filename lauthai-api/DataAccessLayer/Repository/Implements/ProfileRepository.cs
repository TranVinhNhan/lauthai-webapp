using System.Collections.Generic;
using System.Threading.Tasks;
using lauthai_api.DataAccessLayer.Data;
using lauthai_api.Models;
using lauthai_api.DataAccessLayer.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace lauthai_api.DataAccessLayer.Repository.Implements
{
    public class ProfileRepository : GenericRepository<Profile>, IProfileRepository
    {
        private readonly LauThaiDbContext _context;
        public ProfileRepository(LauThaiDbContext context) : base(context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Profile>> GetAllProfiles()
        {
            var profiles = await _context.Profiles.Include(p => p.University).AsNoTracking().ToListAsync();
            return profiles;
        }

        public async Task<Profile> GetProfileById(int id)
        {
            var profile = await _context.Profiles.Include(p => p.University).FirstOrDefaultAsync(p => p.Id == id);
            return profile;
        }
    }
}