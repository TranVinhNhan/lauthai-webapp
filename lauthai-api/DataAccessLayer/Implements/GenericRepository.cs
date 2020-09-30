using System.Threading.Tasks;
using lauthai_api.DataAccessLayer.Data;
using lauthai_api.DataAccessLayer.Repository.Interfaces;
using lauthai_api.Models;

namespace lauthai_api.DataAccessLayer.Repository.Implements
{
    public class GenericRepository<T> : IGenericRepository<T> where T : BaseEntity
    {
        private readonly LauThaiDbContext _context;
        public GenericRepository(LauThaiDbContext context)
        {
            _context = context;
        }
        public void Add(T obj) => _context.Add(obj);
        public void Delete(T obj) => _context.Remove(obj);
        public void Update(T obj) => _context.Update(obj);
        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}