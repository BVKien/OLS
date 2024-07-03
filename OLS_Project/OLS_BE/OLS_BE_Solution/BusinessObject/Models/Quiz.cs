using System;
using System.Collections.Generic;

namespace BusinessObject.Models
{
    public partial class Quiz
    {
        public Quiz()
        {
            Questions = new HashSet<Question>();
        }

        public int QuizId { get; set; }
        public string? QuizName { get; set; }
        public int? LessonLessonId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual Lesson? LessonLesson { get; set; }
        public virtual ICollection<Question> Questions { get; set; }
    }
}
