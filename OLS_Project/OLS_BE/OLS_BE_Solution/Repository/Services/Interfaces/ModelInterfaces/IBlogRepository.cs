using BusinessObject.Dtos.BlogDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Interfaces.ModelInterfaces
{
    public interface IBlogRepository
    {
        // == customer == 
        List<BlogReadDtoForCustomer> GetAllBlogForCustomer();
        BlogReadDtoForCustomer GetBlogByBlogIdForCustomer(int blogId);
        List<BlogReadDtoForCustomer> GetAllBlogByUserIdForCustomer(int userId);
        List<BlogReadDtoForCustomer> GetAllBlogByTopicIdForCustomer(int blogTopicId);
        void CreateBlogForCustomer(BlogCreateDtoForCustomer blog);
        void UpdateBlogForCustomer(int blogId, int userId, BlogUpdateDtoForCustomer blog);
        void DeleteBlogForCustomer(int blogId, int userId);

        // == expert == 
        public List<BlogReadDtoForExpert> GetAllBlogForExpert();
        BlogReadDtoForExpert GetBlogByBlogIdForExpert(int blogId);
        List<BlogReadDtoForExpert> GetAllBlogByUserIdForExpert(int userId);
        void CreateBlogForExpert(BlogCreateDtoForExpert blog);
        void UpdateBlogForExpert(int blogId, int userId, BlogUpdateDtoForExpert blog);
        void DeleteBlogForExpert(int blogId, int userId);
        void ApproveBlog(int blogId, int userId);
        void BanBlog(int blogId, int userId);

    }
}
