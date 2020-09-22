using System;
using System.Threading.Tasks;
using AutoMapper;
using lauthai_api.DataAccessLayer;
using lauthai_api.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace lauthai_api.Controllers
{
    [Authorize(Roles = "Admin")]
    [ApiController]
    [Route("api/[controller]")]
    public class FeedbackController : ControllerBase
    {
        private readonly ILauThaiRepository _repo;
        private readonly IMapper _mapper;
        public FeedbackController(ILauThaiRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAllFeedback()
        {
            var getAllFeedback = await _repo.GetAllFeedbacks();
            if (getAllFeedback != null)
                return Ok(getAllFeedback);
            return NotFound();
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> CreateFeedback(FeedbackToCreateDto feedbackCreateDto)
        {
            if (feedbackCreateDto != null)
            {
                var newFeedback = _mapper.Map<Models.Feedback>(feedbackCreateDto);
                newFeedback.DayCreated = DateTime.Now;
                if (feedbackCreateDto.UserId.HasValue)
                {
                    var requestedUser = await _repo.GetUserById(feedbackCreateDto.UserId.Value);
                    requestedUser.Feedbacks.Add(newFeedback);
                }
                else
                {
                    _repo.Add(newFeedback);
                }
                if (await _repo.SaveAll())
                {
                    return Ok();
                }
            }
            return NotFound();
        }
    }
}