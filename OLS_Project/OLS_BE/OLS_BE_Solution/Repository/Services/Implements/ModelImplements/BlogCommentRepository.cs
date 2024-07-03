using BusinessObject.Dtos.BlogCommentDtos;
using DataAccess.Dao.ModelDao;
using Repository.Services.Interfaces.ModelInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Implements.ModelImplements
{
    public class BlogCommentRepository : IBlogCommentRepository
    {
        private readonly BlogCommentDao _blogCommentDao;
        public BlogCommentRepository() { }
        public BlogCommentRepository(BlogCommentDao blogCommentDao)
        {
            _blogCommentDao = blogCommentDao;
        }

        public List<BlogCommentReadDtoForCustomer> GetAllCommentByBlogId(int blogId)
            => _blogCommentDao.GetAllCommentByBlogId(blogId);
        public void CreateCommentOrReply(BlogCommentCreateDtoForCustomer cr)
            => _blogCommentDao.CreateCommentOrReply(cr);
        public void UpdateCommentOrReply(int blogCommentId, int blogId, int userId, BlogCommentUpdateDtoForCustomer cr)
            => _blogCommentDao.UpdateCommentOrReply(blogCommentId, blogId, userId, cr);
        public void DeleteCommentOrReply(int blogCommentId, int blogId, int userId)
            => _blogCommentDao.DeleteCommentOrReply(blogCommentId, blogId, userId);
    }
}
