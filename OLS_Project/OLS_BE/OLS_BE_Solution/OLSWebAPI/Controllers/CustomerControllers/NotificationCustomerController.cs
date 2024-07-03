using BusinessObject.Dtos.NotificationDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.CustomerControllers
{
    [ApiController]
    [Route("api/customer/notification")]
    public class NotificationCustomerController : ControllerBase
    {
        private readonly INotificationRepository _repo;
        public NotificationCustomerController(INotificationRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_notification_in_all_course")]
        public ActionResult<IEnumerable<NotificationReadDtoForCustomer>> GetAllNotiInAllCourse()
        {
            try
            {
                var list = _repo.GetAllNotiForCustomer();
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
