using System;
using System.Collections.Generic;

namespace BusinessObject.Models
{
    public partial class LearningPath
    {
        public LearningPath()
        {
            Courses = new HashSet<Course>();
        }

        public int LearningPathId { get; set; }
        public string? LearningPathName { get; set; }
        public string? Description { get; set; }
        public string? Image { get; set; }
        public int? Status { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual ICollection<Course> Courses { get; set; }
    }
}
