using BusinessObject.Dtos.LearningPathDto;
using BusinessObject.Models;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterface;

namespace OLSWebAPI.Controllers.CustomerControllers
{
    [ApiController]
    [Route("api/customer/learning_path")]
    public class LearningPathCustomerController : ControllerBase
    {
        private readonly ILearningPathRepository _repo;
        public LearningPathCustomerController(ILearningPathRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_learning_path")]
        public ActionResult<IEnumerable<LearningPathReadDtoForCustomer>> GetAllLearningPath()
        {
            try
            {
                var list = _repo.GetAllLearningPathForCustomer();
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_learning_path_detail/{learning_path_id}")]
        public ActionResult<IEnumerable<LearningPathReadDtoForCustomer>> GetLearningPathDetail(int learning_path_id)
        {
            try
            {
                var lpDetail = _repo.GetLearningPathByGetLearningPathIdForCustomer(learning_path_id);
                return Ok(lpDetail);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
