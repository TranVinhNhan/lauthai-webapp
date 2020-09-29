using System;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using lauthai_api.DataAccessLayer;
using lauthai_api.Dtos;
using lauthai_api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace lauthai_api.Controllers
{
    [Authorize(Roles = "Admin")]
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly ILauThaiRepository _repo;
        private readonly IMapper _mapper;
        public OrderController(ILauThaiRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> PlaceOrder(OrderToCreateDto orderToCreateDto)
        {
            if (User.FindFirst(ClaimTypes.NameIdentifier) == null)
                return Unauthorized();

            var order = _mapper.Map<Order>(orderToCreateDto);
            order.DateCreated = DateTime.Now;
            foreach (var item in order.OrderDetails)
            {
                var profile = await _repo.GetProfileById(item.ProfileId);
                if (profile == null)
                    return NotFound("Cannot find your product at database");
                else
                    profile.OrderDetails.Add(item);
            }

            var user = await _repo.GetUserById(int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value));
            user.Orders.Add(order);
            _repo.Add(order);
            if (await _repo.SaveAll())
            {
                var orderToReturn = _mapper.Map<OrderToReturnDto>(order);
                return CreatedAtRoute("GetOrderById", new { orderToReturn.Id }, orderToReturn);
            }

            throw new Exception("Cannot place your order");
        }

        [HttpGet("{id}", Name = "GetOrderById")]
        public async Task<IActionResult> GetOrderById(int id)
        {
            var order = await _repo.GetOrderById(id);
            if (order == null)
                return NotFound();

            return Ok(order);
        }

        [AllowAnonymous]
        [HttpGet("user")]
        public async Task<IActionResult> GetOrderOfUser()
        {
            if (User.FindFirst(ClaimTypes.NameIdentifier) == null)
                return Unauthorized();

            var orders = await _repo.GetAllOrdersOfUser(int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value));
            if (orders != null)
                return Ok(orders);

            return NotFound();
        }
    }
}