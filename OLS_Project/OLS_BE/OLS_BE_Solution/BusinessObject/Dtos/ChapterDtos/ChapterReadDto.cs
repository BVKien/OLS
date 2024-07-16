using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.ChapterDtos
{
    public class ChapterReadDtoForCustomer
    {
        public int ChapterId { get; set; }
        public string? ChapterName { get; set; }
        public int CourseCourseId { get; set; }
        public string? CourseName { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

    public class ChapterReadDtoForAdmin
    {
        public int ChapterId { get; set; }
        public string? ChapterName { get; set; }
        public int CourseCourseId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
