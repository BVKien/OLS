﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.ChapterDtos
{
    public class ChapterCreateDtoForAdmin 
    {
        public int ChapterId { get; set; }
        public string? ChapterName { get; set; }
        public int CourseCourseId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
