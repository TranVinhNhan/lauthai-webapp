using System.Collections.Generic;
using System.Threading.Tasks;

namespace lauthai_api.DataAccessLayer.Repository.Interfaces
{
    public interface IGenericRepository
    {
        void Add<T>(T obj) where T : class;
        void Update<T>(T obj) where T : class;
        void Delete<T>(T obj) where T : class;
        Task<bool> SaveAll();
    }
}