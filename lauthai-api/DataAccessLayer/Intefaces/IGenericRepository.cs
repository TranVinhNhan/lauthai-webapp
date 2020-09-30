using lauthai_api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace lauthai_api.DataAccessLayer.Repository.Interfaces
{
    public interface IGenericRepository<T> where T : BaseEntity
    {
        void Add(T obj);
        void Update(T obj);
        void Delete(T obj);
        Task<bool> SaveAll();
    }
}