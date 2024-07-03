using BusinessObject.Dtos.SaveBlogDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Interfaces.ModelInterfaces
{
    public interface ISaveBlogRepository
    {
        List<SaveBlogReadDtoForCustomer> GetAllSavedBlogByUserId(int userId);
        void SaveBlog(SaveBlogCreateDtoForCustomer sb);
        void UnSaveBlog(int blogId, int userId);
    }
}
