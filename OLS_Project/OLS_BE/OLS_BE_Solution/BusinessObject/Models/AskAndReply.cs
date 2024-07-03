using System;
using System.Collections.Generic;

namespace BusinessObject.Models
{
    public partial class AskAndReply
    {
        public AskAndReply()
        {
            InverseReplyForAsk = new HashSet<AskAndReply>();
        }

        public int AskId { get; set; }
        public int? UserUserId { get; set; }
        public int? ReplyForAskId { get; set; }
        public string? ContentFor { get; set; }
        public string? Image { get; set; }
        public int? DiscussDiscussId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual Discuss? DiscussDiscuss { get; set; }
        public virtual AskAndReply? ReplyForAsk { get; set; }
        public virtual User? UserUser { get; set; }
        public virtual ICollection<AskAndReply> InverseReplyForAsk { get; set; }
    }
}
