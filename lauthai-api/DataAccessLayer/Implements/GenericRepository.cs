using System.Threading.Tasks;
using lauthai_api.DataAccessLayer.Data;
using lauthai_api.DataAccessLayer.Repository.Interfaces;

namespace lauthai_api.DataAccessLayer.Repository.Implements
{
    public class GenericRepository : IGenericRepository
    {
        private readonly LauThaiDbContext _context;
        public GenericRepository(LauThaiDbContext context)
        {
            _context = context;
        }
        public void Add<T>(T obj) where T : class => _context.Add(obj);
        public void Delete<T>(T obj) where T : class => _context.Remove(obj);
        public void Update<T>(T obj) where T : class => _context.Update(obj);
        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}