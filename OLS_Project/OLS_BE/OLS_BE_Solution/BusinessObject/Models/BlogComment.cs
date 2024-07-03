using System;
using System.Collections.Generic;

namespace BusinessObject.Models
{
    public partial class BlogComment
    {
        public BlogComment()
        {
            InverseReplyForComment = new HashSet<BlogComment>();
        }

        public int BlogCommentId { get; set; }
        public int? UserUserId { get; set; }
        public int? ReplyForCommentId { get; set; }
        public string? ContentFor { get; set; }
        public string? Image { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public int? BlogBlogId { get; set; }

        public virtual Blog? BlogBlog { get; set; }
        public virtual BlogComment? ReplyForComment { get; set; }
        public virtual User? UserUser { get; set; }
        public virtual ICollection<BlogComment> InverseReplyForComment { get; set; }
    }
}
