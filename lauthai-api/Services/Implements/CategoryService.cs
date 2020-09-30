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
    public class CategoryService : ICategoryService
    {
        private readonly ILauThaiRepository<Category> _categoryRepository;

        public CategoryService(ILauThaiRepository<Category> categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        public void Add(Category obj)
        {
            _categoryRepository.Add(obj);
        }

        public void Delete(Category obj)
        {
            _categoryRepository.Delete(obj);
        }

        public Task<IQueryable<Category>> GetAllCategories()
        {
            return _categoryRepository.GetAllAsync();
        }

        public Task<Category> GetCategoryById(int categoryId)
        {
            return _categoryRepository.GetByIdAsync(categoryId);
        }

        public Task<bool> SaveAll()
        {
            return _categoryRepository.SaveAll();
        }

        public void Update(Category obj)
        {
            _categoryRepository.Update(obj);
        }
    }
}
