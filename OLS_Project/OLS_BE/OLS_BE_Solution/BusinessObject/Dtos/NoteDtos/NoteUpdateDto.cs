using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.NoteDtos
{
    public class NoteUpdateDtoForCustomer 
    {
        public string? ContentFor { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
