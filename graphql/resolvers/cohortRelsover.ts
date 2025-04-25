const {
  allCohorts,
  createCohort,
  getCohortById,
  updateCohort,
  deleteCohort,
  addStudentToCohort,
} = require("../controllers/cohortController"); //import class schedule controller

const classScheduleResolver = {
  Query: {
    cohort: async () => {
      return await allCohorts();
    },
    CohortById: async (_: any, { classId }: any) => {
      return await getCohortById(classId);
    },
  },
  Mutation: {
    createCohort: async (
      _: any,
      {
        course_id,
        instructor_id,
        cohort,
        start_date,
        end_date,
        class_time,
        training_days,
        cohort_capacity,
        venue,
        location,
        customLink,
      }: any
    ) => {
      return await createCohort(
        course_id,
        instructor_id,
        cohort,
        start_date,
        end_date,
        class_time,
        training_days,
        cohort_capacity,
        venue,
        location,
        customLink
      );
    },

    updateCohort: async (
      _: any,
      {
        course_id,
        instructor_id,
        cohort,
        start_date,
        end_date,
        class_time,
        training_days,
        cohort_capacity,
        venue,
        location,
        customLink,
        classId,
      }: any
    ) => {
      return await updateCohort(
        course_id,
        instructor_id,
        cohort,
        start_date,
        end_date,
        class_time,
        training_days,
        cohort_capacity,
        venue,
        location,
        customLink,
        classId
      );
    },
    deleteCohort: async (_: any, { classId }: any) => {
      return await deleteCohort(classId);
    },

    addStudentToCohort: async (
      _: any,
      { student_id, classId }: any,
      context: any
    ) => {
      const jwtId = context.user;

      if (!jwtId) {
        throw new Error("unauthorized");
      }

      return await addStudentToCohort(student_id, classId, jwtId);
    },
  },
};

module.exports = classScheduleResolver;
