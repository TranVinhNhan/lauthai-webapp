using NUnit.Framework;
using Moq;
using lauthai_api.Models;
using lauthai_api.DataAccessLayer.Data;
using Microsoft.EntityFrameworkCore;

namespace lauthai_api_RepoTests
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {

        }

        [Test]
        public void Test1()
        {
            //var testObject = new Profile();
            //var testContext = new Mock<LauThaiDbContext>();
            //var dbSetMock = new Mock<DbSet<Profile>>();

            //testContext.Setup(x => x.Set<Profile>()).Returns(dbSetMock.Object);
            //dbSetMock.Setup(x => x.Add(It.IsAny<Profile>())).Returns(testObject);

            Assert.Pass();
        }
    }
}