using BusinessObject.Dtos.AskAndReplyDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Interfaces.ModelInterfaces
{
    public interface IAskAndReplyRepository
    {
        List<AskAndReplyReadDtoForCustomer> GetAllAskAndReplyByDiscussId(int discussId);
        List<AskAndReplyReadDtoForCustomer> GetAllReplyByDiscussIdAndAskId(int discussId, int askId);
        AskAndReplyReadDtoForCustomer GetAskDetail(int arId, int discussId);
        AskAndReplyReadDtoForCustomer GetReplyDetail(int arId, int discussId);
        float CountAllReplyByDiscussIdAndAskId(int discussId, int askId); 
        void CreateAskOrReply(AskAndReplyCreateDtoForCustomer ar);
        void UpdateAskOrReply(int arId, int userId, int discussId, AskAndReplyUpdateDtoForCustomer ar);
        void DeteleAskOrReply(int arId, int userId, int discussId);
    }
}
