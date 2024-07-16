using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.AskAndReplyDtos
{
    public class AskAndReplyReadDtoForCustomer
    {
        public int AskId { get; set; }
        public int? UserUserId { get; set; }
        public string? FullName { get; set; }
        public string? Avatar { get; set; }
        public int? ReplyForAskId { get; set; }
        public string? ContentFor { get; set; }
        public string? Image { get; set; }
        public int? DiscussDiscussId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
