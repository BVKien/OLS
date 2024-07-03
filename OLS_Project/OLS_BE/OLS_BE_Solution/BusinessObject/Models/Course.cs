using System;
using System.Collections.Generic;

namespace BusinessObject.Models
{
    public partial class Course
    {
        public Course()
        {
            Chapters = new HashSet<Chapter>();
            CourseEnrolleds = new HashSet<CourseEnrolled>();
            FeedBacks = new HashSet<FeedBack>();
            Notifications = new HashSet<Notification>();
        }

        public int CourseId { get; set; }
        public string? CourseName { get; set; }
        public string? Description { get; set; }
        public string? CourseInfomation { get; set; }
        public string? Image { get; set; }
        public string? VideoIntro { get; set; }
        public int? Fee { get; set; }
        public int? Status { get; set; }
        public int LearningPathLearningPathId { get; set; }
        public int UserUserId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual LearningPath LearningPathLearningPath { get; set; } = null!;
        public virtual User UserUser { get; set; } = null!;
        public virtual ICollection<Chapter> Chapters { get; set; }
        public virtual ICollection<CourseEnrolled> CourseEnrolleds { get; set; }
        public virtual ICollection<FeedBack> FeedBacks { get; set; }
        public virtual ICollection<Notification> Notifications { get; set; }
    }
}
