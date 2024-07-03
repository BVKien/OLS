using System;
using System.Collections.Generic;

namespace BusinessObject.Models
{
    public partial class SaveBlog
    {
        public int BlogBlogId { get; set; }
        public int UserUserId { get; set; }
        public DateTime? SavedDay { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual Blog BlogBlog { get; set; } = null!;
        public virtual User UserUser { get; set; } = null!;
    }
}
