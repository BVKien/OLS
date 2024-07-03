using System;
using System.Collections.Generic;

namespace BusinessObject.Models
{
    public partial class Notification
    {
        public int NotificationId { get; set; }
        public string? ContentFor { get; set; }
        public int CourseCourseId { get; set; }
        public int UserUserId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual Course CourseCourse { get; set; } = null!;
        public virtual User UserUser { get; set; } = null!;
    }
}
