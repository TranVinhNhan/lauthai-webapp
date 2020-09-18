using System.Threading.Tasks;
using lauthai_api.DataAccessLayer.Data;
using lauthai_api.DataAccessLayer.Repository.Interfaces;
using lauthai_api.Models;
using Microsoft.EntityFrameworkCore;

namespace lauthai_api.DataAccessLayer.Repository.Implements
{
    public class UserRpository : GenericRepository<User>, IUserRepository
    {
        private readonly LauThaiDbContext _context;
        public UserRpository(LauThaiDbContext context) : base(context)
        {
            _context = context;
        }

        public async Task<User> GetUserById(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }
    }
}