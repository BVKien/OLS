using BusinessObject.Dtos.NoteDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Interfaces.ModelInterfaces
{
    public interface INoteRepository
    {
        List<NoteReadDtoForCustomer> GetAllNoteByLessonIdAndUserId(int lessonId, int userId);
        NoteReadDtoForCustomer GetNoteByNoteId(int noteId);
        void CreateNote(NoteCreateDtoForCustomer note);
        void UpdateNote(int noteId, NoteUpdateDtoForCustomer note);
        void DeleteNote(int noteId);
    }
}
