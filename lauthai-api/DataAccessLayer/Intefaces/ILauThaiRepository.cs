using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using lauthai_api.DataAccessLayer.Repository.Interfaces;
using lauthai_api.Models;

namespace lauthai_api.DataAccessLayer
{
    public interface ILauThaiRepository<T> : IGenericRepository<T> where T : BaseEntity
    {
        Task<IQueryable<T>> GetAllAsync();
        Task<T> GetByIdAsync(int id);
    }
}