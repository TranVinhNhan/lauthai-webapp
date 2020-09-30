using lauthai_api.DataAccessLayer;
using lauthai_api.DataAccessLayer.Data;
using lauthai_api.DataAccessLayer.Repository.Interfaces;
using lauthai_api.Models;
using lauthai_api.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lauthai_api.Services.Implements
{
    public class OrderService : IOrderService
    {
        private readonly ILauThaiRepository<Order> _orderRepository;

        public OrderService(ILauThaiRepository<Order> orderRepository)
        {
            _orderRepository = orderRepository;
        }

        public void Add(Order obj)
        {
            _orderRepository.Add(obj);
        }

        public void Delete(Order obj)
        {
            _orderRepository.Delete(obj);
        }

        public Task<Order> GetOrderById(int id)
        {
            return _orderRepository.GetByIdAsync(id);
        }

        public async Task<IEnumerable<Order>> GetOrdersOfUser(int userId)
        {
            var orders = await _orderRepository.GetAllAsync();
            var userOrders = orders.Where(o => o.UserId == userId);
            return userOrders;
        }

        public Task<bool> SaveAll()
        {
            return _orderRepository.SaveAll();
        }

        public void Update(Order obj)
        {
            _orderRepository.Update(obj);
        }
    }
}
