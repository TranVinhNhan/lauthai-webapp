using lauthai_api.Controllers;
using lauthai_api.Models;
using lauthai_api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lauthai_api_unit_testing.Controllers
{
    [TestFixture]
    class CategoryControllerTests
    {
        private Mock<ICategoryService> _categoryServiceMock;
        private CategoryController _controller;
        [SetUp]
        public void Setup()
        {
            _categoryServiceMock = new Mock<ICategoryService>();
            _controller = new CategoryController(_categoryServiceMock.Object);
        }

        [Test]
        public async Task GetAllCategories_GetSuccess_ReturnListCategories()
        {
            _categoryServiceMock.Setup(c => c.GetAllCategories()).ReturnsAsync(new List<Category> { new Category { Id = 1 }, new Category { Id = 2 } }.AsQueryable());
            IActionResult response = await _controller.GetAllCategories();
            var result = response as OkObjectResult;
            var actual = result.Value as IQueryable<Category>;

            Assert.AreEqual(1, actual.ToList()[0].Id);
            Assert.AreEqual(2, actual.ToList().Count());
            Assert.IsInstanceOf(typeof(OkObjectResult), response);
        }

        [Test]
        public async Task GetAllCategories_GetNotFound_ReturnListCategories()
        {
            IQueryable<Category> categories = null;
            _categoryServiceMock.Setup(c => c.GetAllCategories()).ReturnsAsync(categories);
            IActionResult response = await _controller.GetAllCategories();
            var result = response as NotFoundObjectResult;
            Assert.IsNull(result);
            Assert.IsInstanceOf(typeof(NotFoundResult), response);
        }
    }
}
