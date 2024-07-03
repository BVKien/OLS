using BusinessObject.Dtos.DiscussDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Interfaces.ModelInterfaces
{
    public interface IDiscussRepository
    {
        DiscussReadDtoForCustomer GetDiscussionDetail(int discussId, int lessonId);
        void CreateDiscussion(DiscussCreateDtoForAdmin dc);
        void DeleteDiscussion(int discussId, int lessonId);
    }
}
