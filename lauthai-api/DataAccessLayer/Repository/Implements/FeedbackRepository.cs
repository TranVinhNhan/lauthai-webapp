
// using lauthai_api.Models;
// using AutoMapper;
// using lauthai_api.DataAccessLayer.Repository.Interfaces;
// using lauthai_api.DataAccessLayer.Data;
// using System.Threading.Tasks;
// using System.Collections.Generic;

using System.Collections.Generic;
using System.Threading.Tasks;
using lauthai_api.DataAccessLayer.Data;
using lauthai_api.DataAccessLayer.Repository.Interfaces;
using lauthai_api.Models;
using Microsoft.EntityFrameworkCore;

namespace lauthai_api.DataAccessLayer.Repository.Implements
{

    public class FeedbackRepository : GenericRepository<Feedback>, IFeedbackRepository
    {
        private readonly LauThaiDbContext _context;

        public FeedbackRepository(LauThaiDbContext context) : base(context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Feedback>> GetAllFeedbacks()
        {
            var getFeedback = await _context.Feedbacks.AsNoTracking().ToListAsync();
            return getFeedback;
        }

        public async Task<Feedback> GetFeedbackById(int id)
        {
            var getFeedbackById = await _context.Feedbacks.FirstOrDefaultAsync(a => a.Id == id);

        
            return getFeedbackById;
        }
    }
}