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
        void CreateAskOrReply(AskAndReplyCreateDtoForCustomer ar);
        void UpdateAskOrReply(int arId, int userId, int discussId, AskAndReplyUpdateDtoForCustomer ar);
        void DeteleAskOrReply(int arId, int userId, int discussId);
    }
}
