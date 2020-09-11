using System.Collections.Generic;
using System.Threading.Tasks;
using lauthai_api.Models;
using lauthai_api.DataAccessLayer.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;
using lauthai_api.DataAccessLayer.Data;

namespace lauthai_api.DataAccessLayer.Repository.Implements
{
    public class UniversityRepository : GenericRepository<University>, IUniversityRepository
    {
        private readonly LauThaiDbContext _context;
        public UniversityRepository(LauThaiDbContext context) : base(context)
        {
            _context = context;
        }

        public async Task<IEnumerable<University>> GetAllUni()
        {
            var allUni = await _context.Universities.Include(u => u.Profiles).ToListAsync();
            return allUni;
        }

        public async Task<University> GetUniversityById(int id)
        {
            var uni = await _context.Universities.Include(u => u.Profiles).FirstOrDefaultAsync(u => u.Id == id);
            return uni;
        }
    }
}