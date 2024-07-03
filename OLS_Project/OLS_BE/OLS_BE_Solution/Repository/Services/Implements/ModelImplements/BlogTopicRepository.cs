using BusinessObject.Dtos.BlogDtos;
using BusinessObject.Dtos.BlogTopicDtos;
using DataAccess.Dao.ModelDao;
using Repository.Services.Interfaces.ModelInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Implements.ModelImplements
{
    public class BlogTopicRepository : IBlogTopicRepository
    {
        private readonly BlogTopicDao _blogTopicDao;
        public BlogTopicRepository() { }
        public BlogTopicRepository(BlogTopicDao blogTopicDao)
        {
            _blogTopicDao = blogTopicDao;
        }

        // == customer == 
        public List<BlogReadDtoForCustomer> GetAllBlogTopicForCustomer()
            => _blogTopicDao.GetAllBlogTopicForCustomer();

        // == expert ==
        public List<BlogReadDtoForExpert> GetAllBlogTopicForExpert()
            => _blogTopicDao.GetAllBlogTopicForExpert();
        public BlogReadDtoForExpert GetBlogTopicByBlogTopicIdForExpert(int btId)
            => _blogTopicDao.GetBlogTopicByBlogTopicIdForExpert(btId);
        public void CreateBlogTopic(BlogTopicCreateDtoForExpert bt)
            => _blogTopicDao.CreateBlogTopic(bt);
        public void UpdateBlogTopic(int btId, BlogTopicUpdateDtoForExpert bt)
            => _blogTopicDao.UpdateBlogTopic(btId, bt);
        public void DeleteBlogTopic(int btId)
            => _blogTopicDao.DeleteBlogTopic(btId);
    }
}
