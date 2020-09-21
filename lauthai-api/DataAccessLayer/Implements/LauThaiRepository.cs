using System.Collections.Generic;
using System.Threading.Tasks;
using lauthai_api.DataAccessLayer.Data;
using lauthai_api.DataAccessLayer.Repository.Implements;
using lauthai_api.Models;
using Microsoft.EntityFrameworkCore;

namespace lauthai_api.DataAccessLayer
{
    public class LauThaiRepository : GenericRepository, ILauThaiRepository
    {
        private readonly LauThaiDbContext _context;
        public LauThaiRepository(LauThaiDbContext context) : base(context)
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
        public async Task<IEnumerable<Feedback>> GetAllFeedbacks()
        {
            var getFeedback = await _context.Feedbacks.AsNoTracking().ToListAsync();
            return getFeedback;
        }
        public async Task<Feedback> GetFeedbackById(int id)
        {
            var feedback = await _context.Feedbacks.FirstOrDefaultAsync(a => a.Id == id);
            return feedback;
        }
        public async Task<User> GetUserById(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }
    }
}