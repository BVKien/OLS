using AutoMapper;
using BusinessObject.Dtos.NotificationDtos;
using BusinessObject.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Dao.ModelDao
{
    public class NotificationDao
    {
        private readonly IMapper _mapper;
        public NotificationDao(IMapper mapper)
        {
            _mapper = mapper;
        }

        // == customer ==
        // get all notification in all course 
        public List<NotificationReadDtoForCustomer> GetAllNotiForCustomer()
        {
            var notiList = new List<NotificationReadDtoForCustomer>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.Notifications
                        .Include(n => n.CourseCourse)
                        .Include(n => n.UserUser)
                        .ToList();
                    notiList = _mapper.Map<List<NotificationReadDtoForCustomer>>(list);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return notiList;
        }

        // == admin ==  
        // get all notification in all course 
        public List<NotificationReadDtoForAdmin> GetAllNotiForAdmin()
        {
            var notiList = new List<NotificationReadDtoForAdmin>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.Notifications
                        .Include(n => n.CourseCourse)
                        .Include(n => n.UserUser)
                        .ToList();
                    notiList = _mapper.Map<List<NotificationReadDtoForAdmin>>(list);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return notiList;
        }

        // get noti detail by noti id 
        public NotificationReadDtoForAdmin GetNotiByNotiId(int notiId)
        {
            var notiDetail = new NotificationReadDtoForAdmin();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var noti = context.Notifications
                        .Include(n => n.CourseCourse)
                        .Include(n => n.UserUser)
                        .FirstOrDefault(n => n.NotificationId == notiId);
                    if (noti != null)
                    {
                        throw new Exception("Not found notification.");
                    }
                    notiDetail = _mapper.Map<NotificationReadDtoForAdmin>(notiDetail);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return notiDetail;
        }

        // create a new noti 
        public void CreateNoti(NotificationCreateDtoForAdmin noti)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var newNoti = _mapper.Map<Notification>(noti);
                    context.Notifications.Add(newNoti);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // update a noti by noti id 
        public void UpdateNoti(int notiId, int courseId, NotificationUpdateDtoForAdmin noti)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var notiDetail = context.Notifications
                        .FirstOrDefault(n => n.NotificationId == notiId
                        && n.CourseCourseId == courseId);
                    if (notiDetail != null)
                    {
                        throw new Exception("Not found notification.");
                    }

                    // update
                    _mapper.Map(noti, notiDetail);

                    context.Entry(notiDetail).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // delete a noti by noti id 
        public void DeleteNoti(int notiId, int courseId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var notiDetail = context.Notifications
                        .FirstOrDefault(n => n.NotificationId == notiId
                        && n.CourseCourseId == courseId);
                    if (notiDetail != null)
                    {
                        throw new Exception("Not found notification.");
                    }

                    // update
                    context.Notifications.Remove(notiDetail);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
