using System;
using System.Collections.Generic;

namespace BusinessObject.Models
{
    public partial class FeedBack
    {
        public int FeedbackId { get; set; }
        public string? FeedbackContent { get; set; }
        public string? RateStar { get; set; }
        public int? UserUserId { get; set; }
        public int? CourseCourseId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public virtual Course? CourseCourse { get; set; }
        public virtual User? UserUser { get; set; }
    }
}
