using System;
using System.Collections.Generic;

namespace BusinessObject.Models
{
    public partial class Discuss
    {
        public Discuss()
        {
            AskAndReplies = new HashSet<AskAndReply>();
        }

        public int DiscussId { get; set; }
        public int LessonLessonId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual Lesson LessonLesson { get; set; } = null!;
        public virtual ICollection<AskAndReply> AskAndReplies { get; set; }
    }
}
