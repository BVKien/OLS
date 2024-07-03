using BusinessObject.Dtos.DiscussDtos;
using DataAccess.Dao.ModelDao;
using Repository.Services.Interfaces.ModelInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Implements.ModelImplements
{
    public class DiscussRepository : IDiscussRepository
    {
        private readonly DiscussDao _discussDao;
        public DiscussRepository() { }
        public DiscussRepository(DiscussDao discussDao)
        {
            _discussDao = discussDao;
        }

        public DiscussReadDtoForCustomer GetDiscussionDetail(int discussId, int lessonId)
            => _discussDao.GetDiscussionDetail(discussId, lessonId);
        public void CreateDiscussion(DiscussCreateDtoForAdmin dc)
            => _discussDao.CreateDiscussion(dc);
        public void DeleteDiscussion(int discussId, int lessonId)
            => _discussDao.DeleteDiscussion(discussId, lessonId);
    }
}
