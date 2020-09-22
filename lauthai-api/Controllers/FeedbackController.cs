using System;
using System.Threading.Tasks;
using AutoMapper;
using lauthai_api.DataAccessLayer.Repository;
using lauthai_api.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace lauthai_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FeedbackController : ControllerBase
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public FeedbackController(IUnitOfWork uow, IMapper mapper)
        {
            _uow = uow;
            _mapper = mapper;
        }
        [HttpGet("all")]
        public async Task<IActionResult> GetAllFeedback()
        {
            var getAllFeedback = await _uow.FeedbackRepository.GetAllFeedbacks();
            if (getAllFeedback != null)
                return Ok(getAllFeedback);
            return NotFound();
        }
        [HttpPost]
        public async Task<IActionResult> CreateFeedback(FeedbackCreateDto feedbackCreateDto)
        {
            if (feedbackCreateDto != null)
            {
              var newFeedback=  _mapper.Map<Models.Feedback>(feedbackCreateDto);
              newFeedback.DayCreated=  DateTime.Now;
              _uow.FeedbackRepository.Add(newFeedback);
                if (await _uow.SaveAll())
                {
                    return Ok();

                }

            }
            return NotFound();
        }



    }
}