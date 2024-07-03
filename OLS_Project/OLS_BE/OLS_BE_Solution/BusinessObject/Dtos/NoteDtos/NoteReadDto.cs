using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.NoteDtos
{
    public class NoteReadDtoForCustomer
    {
        public string? ContentFor { get; set; }
        public int UserUserId { get; set; }
        public string? UserName { get; set; }
        public int? LessonLessonId { get; set; }
        public string? Title { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
