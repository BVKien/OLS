using BusinessObject.Dtos.NoteDtos;
using DataAccess.Dao.ModelDao;
using Repository.Services.Interfaces.ModelInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Implements.ModelImplements
{
    public class NoteRepository : INoteRepository
    {
        private readonly NoteDao _noteDao;
        public NoteRepository() { }
        public NoteRepository(NoteDao noteDao)
        {
            _noteDao = noteDao;
        }

        public List<NoteReadDtoForCustomer> GetAllNoteByLessonIdAndUserId(int lessonId, int userId)
            => _noteDao.GetAllNoteByLessonIdAndUserId(lessonId, userId);
        public NoteReadDtoForCustomer GetNoteByNoteId(int noteId)
            => _noteDao.GetNoteByNoteId(noteId);
        public void CreateNote(NoteCreateDtoForCustomer note)
            => _noteDao.CreateNote(note);
        public void UpdateNote(int noteId, NoteUpdateDtoForCustomer note)
            => _noteDao.UpdateNote(noteId, note);
        public void DeleteNote(int noteId)
            => _noteDao.DeleteNote(noteId);
    }
}
