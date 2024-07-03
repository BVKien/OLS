using BusinessObject.Dtos.BlogCommentDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Interfaces.ModelInterfaces
{
    public interface IBlogCommentRepository
    {
        List<BlogCommentReadDtoForCustomer> GetAllCommentByBlogId(int blogId);
        void CreateCommentOrReply(BlogCommentCreateDtoForCustomer cr);
        void UpdateCommentOrReply(int blogCommentId, int blogId, int userId, BlogCommentUpdateDtoForCustomer cr);
        void DeleteCommentOrReply(int blogCommentId, int blogId, int userId);
    }
}
