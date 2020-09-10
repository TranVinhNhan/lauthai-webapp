using System.Collections.Generic;
using System.Threading.Tasks;

namespace lauthai_api.Repository.Interfaces
{
    public interface IGenericRepository<T> where T : class
    {
        void Add(T obj);
        void Update(T obj);
        void Delete(T obj);
        Task<bool> SaveAll();
    }
}