using lauthai_api.DataAccessLayer;
using lauthai_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lauthai_api.Services.Interfaces
{
    public interface ICategoryService
    {
        void Add(Category obj);
        void Update(Category obj);
        void Delete(Category obj);
        Task<bool> SaveAll();
        Task<IQueryable<Category>> GetAllCategories();
        Task<Category> GetCategoryById(int categoryId);
    }
}
