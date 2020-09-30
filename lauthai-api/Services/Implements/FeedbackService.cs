using lauthai_api.DataAccessLayer;
using lauthai_api.DataAccessLayer.Data;
using lauthai_api.Models;
using lauthai_api.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lauthai_api.Services.Implements
{
    public class FeedbackService : IFeedbackService
    {
        private readonly ILauThaiRepository<Feedback> _feedbackRepository;

        public FeedbackService(ILauThaiRepository<Feedback> feedbackRepository)
        {
            _feedbackRepository = feedbackRepository;
        }

        public void Add(Feedback obj)
        {
            _feedbackRepository.Add(obj);
        }

        public void Delete(Feedback obj)
        {
            _feedbackRepository.Delete(obj);
        }

        public Task<bool> SaveAll()
        {
            return _feedbackRepository.SaveAll();
        }

        public void Update(Feedback obj)
        {
            _feedbackRepository.Update(obj);
        }
    }
}
