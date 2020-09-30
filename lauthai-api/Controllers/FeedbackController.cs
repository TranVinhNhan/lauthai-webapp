using System;
using System.Threading.Tasks;
using AutoMapper;
using lauthai_api.DataAccessLayer;
using lauthai_api.Dtos;
using lauthai_api.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace lauthai_api.Controllers
{
    [Authorize(Roles = "Admin")]
    [ApiController]
    [Route("api/[controller]")]
    public class FeedbackController : ControllerBase
    {
        private readonly IFeedbackService _feedbackService;
        private readonly IUserService _userService;
        private readonly IMapper _mapper;
        public FeedbackController(
            IFeedbackService feedbackService,
            IUserService userService,
            IMapper mapper
            )
        {
            _feedbackService = feedbackService;
            _userService = userService;
            _mapper = mapper;
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAllFeedback()
        {
            var feedbacks = await _feedbackService.GetAllAsync();
            if (feedbacks != null)
                return Ok(feedbacks);
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
                    var requestedUser = await _userService.GetUserById(feedbackCreateDto.UserId.Value);
                    requestedUser.Feedbacks.Add(newFeedback);
                }
                else
                {
                    _feedbackService.Add(newFeedback);
                }
                if (await _feedbackService.SaveAll())
                {
                    return Ok();
                }
            }
            return NotFound();
        }
    }
}