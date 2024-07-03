using BusinessObject.Dtos.SaveBlogDtos;
using DataAccess.Dao.ModelDao;
using Repository.Services.Interfaces.ModelInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Implements.ModelImplements
{
    public class SaveBlogRepository : ISaveBlogRepository
    {
        private readonly SaveBlogDao _saveBlogDao;
        public SaveBlogRepository() { }
        public SaveBlogRepository(SaveBlogDao saveBlogDao)
        {
            _saveBlogDao = saveBlogDao;
        }

        public List<SaveBlogReadDtoForCustomer> GetAllSavedBlogByUserId(int userId)
            => _saveBlogDao.GetAllSavedBlogByUserId(userId);
        public void SaveBlog(SaveBlogCreateDtoForCustomer sb)
            => _saveBlogDao.SaveBlog(sb);
        public void UnSaveBlog(int blogId, int userId)
            => _saveBlogDao.UnSaveBlog(blogId, userId);
    }
}
