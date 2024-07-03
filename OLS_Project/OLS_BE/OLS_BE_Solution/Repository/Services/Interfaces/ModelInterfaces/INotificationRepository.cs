using BusinessObject.Dtos.NotificationDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Interfaces.ModelInterfaces
{
    public interface INotificationRepository
    {
        // == customer ==
        List<NotificationReadDtoForCustomer> GetAllNotiForCustomer();

        // == admin ==
        List<NotificationReadDtoForAdmin> GetAllNotiForAdmin();
        NotificationReadDtoForAdmin GetNotiByNotiId(int notiId);
        void CreateNoti(NotificationCreateDtoForAdmin noti);
        void UpdateNoti(int notiId, int courseId, NotificationUpdateDtoForAdmin noti);
        void DeleteNoti(int notiId, int courseId);
    }
}
