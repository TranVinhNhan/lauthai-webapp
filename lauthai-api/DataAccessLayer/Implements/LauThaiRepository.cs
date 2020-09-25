using System.Collections.Generic;
using System.Linq;
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
        // Profile
        public async Task<IEnumerable<Profile>> GetAllProfiles()
        {
<<<<<<< HEAD
            return await _context.Profiles.Include(p => p.University).Include(p=>p.Category).AsNoTracking().ToListAsync();
=======
            return await _context.Profiles.Include(p => p.University)
                                          .Include(p => p.Images)
                                          .AsNoTracking()
                                          .ToListAsync();
>>>>>>> f9bc99b2711fa11666b3fa52a71346b0cc538d19
        }
        public async Task<Profile> GetProfileById(int id)
        {
            return await _context.Profiles.Include(p => p.University)
                                          .Include(p => p.Images)
                                          .FirstOrDefaultAsync(p => p.Id == id);
        }
        // University
        public async Task<IEnumerable<University>> GetAllUni()
        {
            return await _context.Universities.Include(u => u.Profiles).ToListAsync();
        }
        public async Task<University> GetUniversityById(int id)
        {
            return await _context.Universities.Include(u => u.Profiles).FirstOrDefaultAsync(u => u.Id == id);
        }
        // category
        public async Task<IEnumerable<Category>> GettAllCategory()
        {
            return await _context.Categories.Include(u=>u.Profiles).ToListAsync();
        }

        public async Task<Category> GetCategoryById(int id)
        {
            return await _context.Categories.Include(u=>u.Profiles).FirstOrDefaultAsync(u=>u.CategoryId==id);
        }
        // Feedback
        public async Task<IEnumerable<Feedback>> GetAllFeedbacks()
        {
            return await _context.Feedbacks.AsNoTracking().ToListAsync();
        }
        public async Task<Feedback> GetFeedbackById(int id)
        {
            return await _context.Feedbacks.FirstOrDefaultAsync(a => a.Id == id);
        }
        // User
        public async Task<User> GetUserById(int id)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
        }

        public async Task<bool> IsUserExist(string username)
        {
            return await _context.Users.AnyAsync(u => u.Username == username) ? true : false;
        }

        public async Task<User> GetUserByUsername(string username)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Username == username);
        }

        public async Task<IEnumerable<User>> GetAllUsers()
        {
            return await _context.Users.ToListAsync();
        }
        // Order Detail
        public async Task<OrderDetail> GetOrderDetailById(int id)
        {
            return await _context.OrderDetails.FirstOrDefaultAsync(o => o.Id == id);
        }
        // Order
        public async Task<Order> GetOrderById(int id)
        {
            return await _context.Orders.FirstOrDefaultAsync(o => o.Id == id);
        }

        public async Task<IEnumerable<Order>> GetAllOrdersOfUser(int id)
        {
            return await _context.Orders.Where(o => o.UserId == id)
                                        .Include(o => o.OrderDetails)
                                        .ToListAsync();
        }
    }
}