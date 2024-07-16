using BusinessObject.Dtos.AskAndReplyDtos;
using DataAccess.Dao.ModelDao;
using Repository.Services.Interfaces.ModelInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Implements.ModelImplements
{
    public class AskAndReplyRepository : IAskAndReplyRepository
    {
        private readonly AskAndReplyDao _askAndReplyDao;
        public AskAndReplyRepository() { }
        public AskAndReplyRepository(AskAndReplyDao askAndReplyDao)
        {
            _askAndReplyDao = askAndReplyDao;
        }

        public List<AskAndReplyReadDtoForCustomer> GetAllAskAndReplyByDiscussId(int discussId)
            => _askAndReplyDao.GetAllAskAndReplyByDiscussId(discussId);
        public List<AskAndReplyReadDtoForCustomer> GetAllReplyByDiscussIdAndAskId(int discussId, int askId)
            => _askAndReplyDao.GetAllReplyByDiscussIdAndAskId(discussId, askId);
        public float CountAllReplyByDiscussIdAndAskId(int discussId, int askId)
            => _askAndReplyDao.CountAllReplyByDiscussIdAndAskId(discussId, askId);
        public AskAndReplyReadDtoForCustomer GetAskDetail(int arId, int discussId)
            => _askAndReplyDao.GetAskDetail(arId, discussId);
        public AskAndReplyReadDtoForCustomer GetReplyDetail(int arId, int discussId)
            => _askAndReplyDao.GetReplyDetail(arId, discussId);
        public void CreateAskOrReply(AskAndReplyCreateDtoForCustomer ar)
            => _askAndReplyDao.CreateAskOrReply(ar);
        public void UpdateAskOrReply(int arId, int userId, int discussId, AskAndReplyUpdateDtoForCustomer ar)
            => _askAndReplyDao.UpdateAskOrReply(arId, userId, discussId, ar);
        public void DeteleAskOrReply(int arId, int userId, int discussId)
            => _askAndReplyDao.DeteleAskOrReply(arId, userId, discussId);
    }
}
