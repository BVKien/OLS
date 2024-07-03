using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.NoteDtos
{
    public class NoteCreateDtoForCustomer
    {
        public string? ContentFor { get; set; }
        public int UserUserId { get; set; }
        public int? LessonLessonId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
