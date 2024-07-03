using BusinessObject.Dtos.LearningPathDto;
using BusinessObject.Dtos.LearningPathDtos;
using BusinessObject.Models;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterface;

namespace OLSWebAPI.Controllers.AdminControllers
{
    [ApiController]
    [Route("api/admin/learning_path")]
    public class LearningPathAdminController : Controller
    {
        private readonly ILearningPathRepository _repo;
        public LearningPathAdminController(ILearningPathRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_learning_path")]
        public ActionResult<IEnumerable<LearningPathReadDtoForAdmin>> GetAllLearningPath()
        {
            try
            {
                var list = _repo.GetAllLearningPathForAdmin();
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_learning_path_detail/{learning_path_id}")]
        public ActionResult<IEnumerable<LearningPathReadDtoForAdmin>> GetLearningPathDetail(int learning_path_id)
        {
            try
            {
                var lpDetail = _repo.GetLearningPathByGetLearningPathIdForAdmin(learning_path_id);
                return Ok(lpDetail);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("create_learning_path")]
        public IActionResult CreateLearningPath(LearningPathCreateDtoForAdmin lp)
        {
            try
            {
                _repo.CreateLearningPath(lp);
                return Ok(lp);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update_learning_path/{learning_path_id}")]
        public IActionResult UpdateLearningPath(int learning_path_id, LearningPathUpdateDtoForAdmin lp)
        {
            try
            {
                _repo.UpdateLearningPath(learning_path_id, lp);
                var lpDetail = _repo.GetLearningPathByGetLearningPathIdForAdmin(learning_path_id);
                return Ok(lpDetail);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete_learning_path/{learning_path_id}")]
        public IActionResult DeleteLearningPath(int learning_path_id)
        {
            try
            {
                _repo.DeleteLearningPath(learning_path_id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
