using BusinessObject.Dtos.NotificationDtos;
using DataAccess.Dao.ModelDao;
using Repository.Services.Interfaces.ModelInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Implements.ModelImplements
{
    public class NotificationRepository : INotificationRepository
    {
        private readonly NotificationDao _notificationDao;
        public NotificationRepository() { }
        public NotificationRepository(NotificationDao notificationDao)
        {
            _notificationDao = notificationDao;
        }

        // == customer ==
        public List<NotificationReadDtoForCustomer> GetAllNotiForCustomer()
            => _notificationDao.GetAllNotiForCustomer();

        // == admin ==
        public List<NotificationReadDtoForAdmin> GetAllNotiForAdmin()
        => _notificationDao.GetAllNotiForAdmin();
        public NotificationReadDtoForAdmin GetNotiByNotiId(int notiId)
            => _notificationDao.GetNotiByNotiId(notiId);
        public void CreateNoti(NotificationCreateDtoForAdmin noti)
            => _notificationDao.CreateNoti(noti);
        public void UpdateNoti(int notiId, int courseId, NotificationUpdateDtoForAdmin noti)
            => _notificationDao.UpdateNoti(notiId, courseId, noti);
        public void DeleteNoti(int notiId, int courseId)
            => _notificationDao.DeleteNoti(notiId, courseId);
    }
}
