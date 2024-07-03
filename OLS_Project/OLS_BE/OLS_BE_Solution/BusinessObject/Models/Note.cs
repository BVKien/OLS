using System;
using System.Collections.Generic;

namespace BusinessObject.Models
{
    public partial class Note
    {
        public int NoteId { get; set; }
        public string? ContentFor { get; set; }
        public int UserUserId { get; set; }
        public int? LessonLessonId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual Lesson? LessonLesson { get; set; }
        public virtual User UserUser { get; set; } = null!;
    }
}
