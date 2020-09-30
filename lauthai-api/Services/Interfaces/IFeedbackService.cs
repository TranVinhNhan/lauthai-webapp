using lauthai_api.DataAccessLayer;
using lauthai_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lauthai_api.Services.Interfaces
{
    public interface IFeedbackService
    {
        void Add(Feedback obj);
        void Update(Feedback obj);
        void Delete(Feedback obj);
        Task<bool> SaveAll();
        Task<IQueryable<Feedback>> GetAllFeedbacks();
    }
}
