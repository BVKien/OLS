﻿using BusinessObject.Dtos.DiscussDtos;
using Microsoft.AspNetCore.Mvc;
using Repository.Services.Interfaces.ModelInterfaces;

namespace OLSWebAPI.Controllers.CustomerControllers
{
    [ApiController]
    [Route("api/customer/discuss")]
    public class DiscussCustomerController : ControllerBase
    {
        private readonly IDiscussRepository _repo;
        public DiscussCustomerController(IDiscussRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("get_discussion_detail/{lesson_id}")]
        public ActionResult<IEnumerable<DiscussReadDtoForCustomer>> GetDiscussionDetail(int lesson_id)
        {
            try
            {
                var dc = _repo.GetDiscussionDetail(lesson_id);
                return Ok(dc);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
