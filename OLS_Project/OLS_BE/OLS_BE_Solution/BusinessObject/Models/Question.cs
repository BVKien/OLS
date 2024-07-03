using System;
using System.Collections.Generic;

namespace BusinessObject.Models
{
    public partial class Question
    {
        public Question()
        {
            Answers = new HashSet<Answer>();
        }

        public int QuestionId { get; set; }
        public int QuizQuizId { get; set; }
        public string? QuestionContent { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual Quiz QuizQuiz { get; set; } = null!;
        public virtual ICollection<Answer> Answers { get; set; }
    }
}
