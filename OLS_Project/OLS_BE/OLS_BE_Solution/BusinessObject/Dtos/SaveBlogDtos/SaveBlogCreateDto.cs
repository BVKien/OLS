﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.SaveBlogDtos
{
    public class SaveBlogCreateDtoForCustomer
    {
        public int BlogBlogId { get; set; }
        public int UserUserId { get; set; }
        public DateTime? SavedDay { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
