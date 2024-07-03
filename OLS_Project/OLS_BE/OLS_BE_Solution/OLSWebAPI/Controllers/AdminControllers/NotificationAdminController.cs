using BusinessObject.Dtos.NotificationDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.AdminControllers
{
    [ApiController]
    [Route("api/admin/notification")]
    public class NotificationAdminController : ControllerBase
    {
        private readonly INotificationRepository _repo;
        public NotificationAdminController(INotificationRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_notification")]
        public ActionResult<IEnumerable<NotificationReadDtoForAdmin>> GetAllNoti()
        {
            try
            {
                var list = _repo.GetAllNotiForAdmin();
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_notification_detail/{notification_id}")]
        public ActionResult<IEnumerable<NotificationReadDtoForAdmin>> GetNotiDetail(int notification_id)
        {
            try
            {
                var noti = _repo.GetNotiByNotiId(notification_id);
                return Ok(noti);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("create_notification")]
        public IActionResult CreateNotification(NotificationCreateDtoForAdmin noti)
        {
            try
            {
                _repo.CreateNoti(noti);
                return Ok(noti);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update_notification/{notification_id}/{course_id}")]
        public IActionResult UpdateNotification(int notification_id, int course_id, NotificationUpdateDtoForAdmin noti)
        {
            try
            {
                _repo.UpdateNoti(notification_id, course_id, noti);
                var response = new
                {
                    NotificationId = notification_id,
                    CourseId = course_id,
                    NotificationInfo = noti
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete_notification/{notification_id}/{course_id}")]
        public IActionResult DeleteNotification(int notification_id, int course_id)
        {
            try
            {
                _repo.DeleteNoti(notification_id, course_id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
