using System.Collections.Generic;
using System.Threading.Tasks;
using lauthai_api.Data;
using lauthai_api.Models;
using lauthai_api.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace lauthai_api.Repository.Implements
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
    }
}