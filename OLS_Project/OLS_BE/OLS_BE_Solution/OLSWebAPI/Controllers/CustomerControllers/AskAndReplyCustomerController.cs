using BusinessObject.Dtos.AskAndReplyDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.CustomerControllers
{
    [ApiController]
    [Route("api/customer/conversation")]
    public class AskAndReplyCustomerController : ControllerBase
    {
        private readonly IAskAndReplyRepository _repo;
        public AskAndReplyCustomerController(IAskAndReplyRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_all_conversation_in_discussion/{discuss_id}")]
        public ActionResult<IEnumerable<AskAndReplyReadDtoForCustomer>> GetAllConversationInDiscussion(int discuss_id)
        {
            try
            {
                var list = _repo.GetAllAskAndReplyByDiscussId(discuss_id);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_all_reply_of_asker_in_discussion/{discuss_id}/{ask_id}")]
        public ActionResult<IEnumerable<AskAndReplyReadDtoForCustomer>> GetAllReplyOfAskerInDiscussion(int discuss_id, int ask_id)
        {
            try
            {
                var list = _repo.GetAllReplyByDiscussIdAndAskId(discuss_id, ask_id);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("count_all_reply_of_asker_in_discussion/{discuss_id}/{ask_id}")]
        public IActionResult CountAllReplyOfAskerInDiscussion(int discuss_id, int ask_id)
        {
            try
            {
                var quantity = _repo.CountAllReplyByDiscussIdAndAskId(discuss_id, ask_id);
                return Ok(quantity);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //[HttpGet("get_ask_or_reply_detail/{ask_id}/{reply_for_ask_id}/{discuss_id}")]
        //public IActionResult GetAskOrReplyDetail(int ask_id, int reply_for_ask_id, int discuss_id)
        //{
        //    try
        //    {
        //        var arDetail = _repo.GetAskOrReplyDetail(ask_id, reply_for_ask_id, discuss_id);
        //        return Ok(arDetail);
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(ex.Message);
        //    }
        //}

        [HttpGet("get_ask_detail/{ask_id}/{discuss_id}")]
        public IActionResult GetAskOrReplyDetail(int ask_id, int discuss_id)
        {
            try
            {
                var arDetail = _repo.GetAskDetail(ask_id, discuss_id);
                return Ok(arDetail);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get_reply_detail/{ask_id}/{discuss_id}")]
        public IActionResult GetReplyDetail(int ask_id, int discuss_id)
        {
            try
            {
                var arDetail = _repo.GetReplyDetail(ask_id, discuss_id);
                return Ok(arDetail);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("create_ask_or_reply")]
        public IActionResult CreateAskOrReply(AskAndReplyCreateDtoForCustomer ar)
        {
            try
            {
                _repo.CreateAskOrReply(ar);
                return Ok(ar);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update_ask_or_reply/{ar_id}/{user_id}/{discuss_id}")]
        public IActionResult UpdateAskOrReply(int ar_id, int user_id, int discuss_id, AskAndReplyUpdateDtoForCustomer ar)
        {
            try
            {
                _repo.UpdateAskOrReply(ar_id, user_id, discuss_id, ar);
                var response = new
                {
                    ArId = ar_id,
                    UserId = user_id,
                    DiscussId = discuss_id,
                    AskOrReplyInfo = ar,
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete_ask_or_reply/{ar_id}/{user_id}/{discuss_id}")]
        public IActionResult DeleteAskOrReply(int ar_id, int user_id, int discuss_id)
        {
            try
            {
                _repo.DeteleAskOrReply(ar_id, user_id, discuss_id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
