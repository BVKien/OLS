using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.LessonDtos
{
    public class LessonUpdateDtoForAdmin
    {
        public int LessonId { get; set; }
        public string? Title { get; set; }
        public string? Video { get; set; }
        public TimeSpan? Time { get; set; }
        public int ChapterChapterId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
