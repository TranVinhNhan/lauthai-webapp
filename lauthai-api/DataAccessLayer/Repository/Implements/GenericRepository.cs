using System.Collections.Generic;
using System.Threading.Tasks;
using lauthai_api.DataAccessLayer.Data;
using lauthai_api.DataAccessLayer.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace lauthai_api.DataAccessLayer.Repository.Implements
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly LauThaiDbContext _context;

        // private readonly DbSet<T> _dbSet;
        public GenericRepository(LauThaiDbContext context)
        {
            _context = context;
            // _dbSet = _context.Set<T>();
        }

        public void Add(T obj)
        {
            _context.Add(obj);
        }

        public void Delete(T obj)
        {
            _context.Remove(obj);
        }

        public void Update(T obj)
        {
            _context.Update(obj);
        }
    }
}