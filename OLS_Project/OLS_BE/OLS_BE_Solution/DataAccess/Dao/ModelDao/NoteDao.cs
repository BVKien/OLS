using AutoMapper;
using BusinessObject.Dtos.NoteDtos;
using BusinessObject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Dao.ModelDao
{
    public class NoteDao
    {
        private readonly IMapper _mapper;
        public NoteDao(IMapper mapper)
        {
            _mapper = mapper;
        }

        // get all note by lesson id and user id 
        public List<NoteReadDtoForCustomer> GetAllNoteByLessonIdAndUserId(int lessonId, int userId)
        {
            var listNote = new List<NoteReadDtoForCustomer>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.Notes
                        .Where(n => n.LessonLessonId == lessonId && n.UserUserId == userId)
                        .Include(n => n.LessonLesson)
                        .Include(n => n.UserUser)
                        .OrderByDescending(n => n.NoteId)
                        .ToList();
                    listNote = _mapper.Map<List<NoteReadDtoForCustomer>>(list);
                    if (listNote.Count == 0)
                    {
                        throw new Exception("Note list is empty.");
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return listNote;
        }

        // get note by note id 
        public NoteReadDtoForCustomer GetNoteByNoteId(int noteId)
        {
            NoteReadDtoForCustomer noteDetail = new NoteReadDtoForCustomer();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var note = context.Notes
                        .Where(n => n.NoteId == noteId)
                        .FirstOrDefault();
                    if (note == null)
                    {
                        throw new Exception("Not found note.");
                    }

                    noteDetail = _mapper.Map<NoteReadDtoForCustomer>(note);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return noteDetail;
        }

        // create a new note 
        public void CreateNote(NoteCreateDtoForCustomer note)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var newNote = _mapper.Map<Note>(note);
                    context.Notes.Add(newNote);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // uodate a note
        public void UpdateNote(int noteId, NoteUpdateDtoForCustomer note)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var noteDetail = context.Notes
                        .FirstOrDefault(n => n.NoteId == noteId);
                    if (noteDetail == null)
                    {
                        throw new Exception("Not found note");
                    }

                    // update 
                    _mapper.Map(note, noteDetail);

                    context.Entry(noteDetail).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // delete a note 
        public void DeleteNote(int noteId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var noteDetail = context.Notes
                        .FirstOrDefault(n => n.NoteId == noteId);
                    if (noteDetail == null)
                    {
                        throw new Exception("Not found note");
                    }

                    // rm 
                    context.Notes.Remove(noteDetail);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
