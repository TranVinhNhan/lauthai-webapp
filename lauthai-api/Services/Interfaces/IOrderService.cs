using lauthai_api.DataAccessLayer;
using lauthai_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lauthai_api.Services.Interfaces
{
    public interface IOrderService
    {
        Task<IEnumerable<Order>> GetOrdersOfUser(int userId);
        void Add(Order obj);
        void Update(Order obj);
        void Delete(Order obj);
        Task<bool> SaveAll();
        Task<Order> GetOrderById(int id);
    }
}
