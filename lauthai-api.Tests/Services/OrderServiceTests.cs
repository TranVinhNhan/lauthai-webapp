using lauthai_api.DataAccessLayer;
using lauthai_api.Models;
using lauthai_api.Services.Implements;
using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace lauthai_api_unit_testing.Services
{
    [TestFixture]
    public class OrderServiceTests
    {
        private Mock<ILauThaiRepository<Order>> _orderRepository;
        private OrderService _orderService;
        [SetUp]
        public void Setup()
        {
            _orderRepository = new Mock<ILauThaiRepository<Order>>();
            _orderService = new OrderService(_orderRepository.Object);
        }

        [Test]
        public async Task GetOrderById_GetSuccess_ShouldReturnOrder()
        {
            _orderRepository.Setup(r => r.GetByIdAsync(1)).Returns(Task.FromResult(new Order() { CustomerFullname = "NgocTrinh"}));

            var actual = await _orderService.GetOrderById(1);
            Assert.AreEqual("NgocTrinh", actual.CustomerFullname);
        }

        [Test]
        public async Task GetOrderById_NotFound_ShouldReturnEmptyOrder()
        {
            _orderRepository.Setup(r => r.GetByIdAsync(1)).Returns(Task.FromResult(new Order() { CustomerFullname = "NgocTrinh" }));

            var actual = await _orderService.GetOrderById(2);

            Assert.IsNull(actual);
        }
    }
}