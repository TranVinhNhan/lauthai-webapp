using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using lauthai_api.DataAccessLayer.Data;
using lauthai_api.DataAccessLayer.Repository.Implements;
using lauthai_api.Models;
using Microsoft.EntityFrameworkCore;

namespace lauthai_api.DataAccessLayer
{
    public class LauThaiRepository<T> : GenericRepository<T>, ILauThaiRepository<T> where T : BaseEntity
    {
        private readonly LauThaiDbContext _context;
        private readonly DbSet<T> _entityTable;
        public LauThaiRepository(LauThaiDbContext context) : base(context)
        {
            _context = context;
            _entityTable = _context.Set<T>();
        }

        public Task<IQueryable<T>> GetAllAsync()
        {
            var query = _entityTable.AsQueryable();
            return Task.FromResult(query);
        }

        public Task<T> GetByIdAsync(int id)
        {
            var query = _entityTable.FirstOrDefaultAsync(x => x.Id == id);
            return query;
        }
    }
}