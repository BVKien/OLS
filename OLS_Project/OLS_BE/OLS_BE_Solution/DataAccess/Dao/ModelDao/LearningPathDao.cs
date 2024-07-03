using AutoMapper;
using BusinessObject.Dtos.LearningPathDto;
using BusinessObject.Dtos.LearningPathDtos;
using BusinessObject.Models;

namespace DataAccess.Dao.ModelDao
{
    public class LearningPathDao
    {
        private readonly IMapper _mapper;
        public LearningPathDao(IMapper mapper)
        {
            _mapper = mapper;
        }

        // == customer ==  
        // get all learning path
        public List<LearningPathReadDtoForCustomer> GetAllLearningPathForCustomer()
        {
            var listLP = new List<LearningPathReadDtoForCustomer>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.LearningPaths.ToList();
                    listLP = _mapper.Map<List<LearningPathReadDtoForCustomer>>(list);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return listLP;
        }

        // get by LP id 
        public LearningPathReadDtoForCustomer GetLearningPathByGetLearningPathIdForCustomer(int lpId)
        {
            LearningPathReadDtoForCustomer lpDetail = new LearningPathReadDtoForCustomer();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var lp = context.LearningPaths
                        .SingleOrDefault(lp => lp.LearningPathId == lpId);
                    lpDetail = _mapper.Map<LearningPathReadDtoForCustomer>(lp);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return lpDetail;
        }

        // == admin ==  
        // get all learning path
        public List<LearningPathReadDtoForAdmin> GetAllLearningPathForAdmin()
        {
            var listLP = new List<LearningPathReadDtoForAdmin>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.LearningPaths.ToList();
                    listLP = _mapper.Map<List<LearningPathReadDtoForAdmin>>(list);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return listLP;
        }

        // get by LP id 
        public LearningPathReadDtoForAdmin GetLearningPathByGetLearningPathIdForAdmin(int lpId)
        {
            LearningPathReadDtoForAdmin lpDetail = new LearningPathReadDtoForAdmin();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var lp = context.LearningPaths
                        .SingleOrDefault(lp => lp.LearningPathId == lpId);
                    lpDetail = _mapper.Map<LearningPathReadDtoForAdmin>(lp);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return lpDetail;
        }

        // create a new lp
        public void CreateLearningPath(LearningPathCreateDtoForAdmin lp)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var newLp = _mapper.Map<LearningPath>(lp);
                    context.LearningPaths.Add(newLp);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // update a lp 
        public void UpdateLearningPath(int lpId, LearningPathUpdateDtoForAdmin lp)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var lpDetail = context.LearningPaths.FirstOrDefault(lp => lp.LearningPathId == lpId);
                    if (lpDetail == null)
                    {
                        throw new Exception("Not found Learning Path.");
                    }

                    // update
                    _mapper.Map(lp, lpDetail);

                    context.Entry(lpDetail).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // delete a lp 
        public void DeleteLearningPath(int lpId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var lpD = context.LearningPaths
                        .SingleOrDefault(lp => lp.LearningPathId == lpId);

                    // rm 
                    context.LearningPaths.Remove(lpD);
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
