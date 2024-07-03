using System;
using System.Collections.Generic;

namespace BusinessObject.Models
{
    public partial class Lesson
    {
        public Lesson()
        {
            Discusses = new HashSet<Discuss>();
            Notes = new HashSet<Note>();
            Quizzes = new HashSet<Quiz>();
        }

        public int LessonId { get; set; }
        public string? Title { get; set; }
        public string? Video { get; set; }
        public TimeSpan? Time { get; set; }
        public int ChapterChapterId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual Chapter ChapterChapter { get; set; } = null!;
        public virtual ICollection<Discuss> Discusses { get; set; }
        public virtual ICollection<Note> Notes { get; set; }
        public virtual ICollection<Quiz> Quizzes { get; set; }
    }
}
