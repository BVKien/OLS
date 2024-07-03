using System;
using System.Collections.Generic;

namespace BusinessObject.Models
{
    public partial class Chapter
    {
        public Chapter()
        {
            Lessons = new HashSet<Lesson>();
        }

        public int ChapterId { get; set; }
        public string? ChapterName { get; set; }
        public int CourseCourseId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual Course CourseCourse { get; set; } = null!;
        public virtual ICollection<Lesson> Lessons { get; set; }
    }
}
