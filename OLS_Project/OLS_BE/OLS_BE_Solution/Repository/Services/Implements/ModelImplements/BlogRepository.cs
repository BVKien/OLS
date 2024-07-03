using BusinessObject.Dtos.BlogDtos;
using DataAccess.Dao.ModelDao;
using Repository.Services.Interfaces.ModelInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Implements.ModelImplements
{
    public class BlogRepository : IBlogRepository
    {
        private readonly BlogDao _blogDao;
        public BlogRepository() { }
        public BlogRepository(BlogDao blogDao)
        {
            _blogDao = blogDao;
        }

        // == customer == 
        public List<BlogReadDtoForCustomer> GetAllBlogForCustomer()
            => _blogDao.GetAllBlogForCustomer();
        public BlogReadDtoForCustomer GetBlogByBlogIdForCustomer(int blogId)
            => _blogDao.GetBlogByBlogIdForCustomer(blogId);
        public List<BlogReadDtoForCustomer> GetAllBlogByUserIdForCustomer(int userId)
            => _blogDao.GetAllBlogByUserIdForCustomer(userId);
        public List<BlogReadDtoForCustomer> GetAllBlogByTopicIdForCustomer(int blogTopicId)
            => _blogDao.GetAllBlogByTopicIdForCustomer(blogTopicId);
        public void CreateBlogForCustomer(BlogCreateDtoForCustomer blog)
            => _blogDao.CreateBlogForCustomer(blog);
        public void UpdateBlogForCustomer(int blogId, int userId, BlogUpdateDtoForCustomer blog)
            => _blogDao.UpdateBlogForCustomer(blogId, userId, blog);
        public void DeleteBlogForCustomer(int blogId, int userId)
            => _blogDao.DeleteBlogForCustomer(blogId, userId);

        // == expert == 
        public List<BlogReadDtoForExpert> GetAllBlogForExpert()
            => _blogDao.GetAllBlogForExpert();
        public BlogReadDtoForExpert GetBlogByBlogIdForExpert(int blogId)
            => _blogDao.GetBlogByBlogIdForExpert(blogId);
        public List<BlogReadDtoForExpert> GetAllBlogByUserIdForExpert(int userId)
            => _blogDao.GetAllBlogByUserIdForExpert(userId);
        public void CreateBlogForExpert(BlogCreateDtoForExpert blog)
            => _blogDao.CreateBlogForExpert(blog);
        public void UpdateBlogForExpert(int blogId, int userId, BlogUpdateDtoForExpert blog)
            => _blogDao.UpdateBlogForExpert(blogId, userId, blog);
        public void DeleteBlogForExpert(int blogId, int userId)
            => _blogDao.DeleteBlogForExpert(blogId, userId);
        public void ApproveBlog(int blogId, int userId)
            => _blogDao.ApproveBlog(blogId, userId);
        public void BanBlog(int blogId, int userId)
            => _blogDao.BanBlog(blogId, userId);
    }
}
