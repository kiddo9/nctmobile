"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { allCohorts, createCohort, getCohortById, updateCohort, deleteCohort, addStudentToCohort, } = require("../controllers/cohortController"); //import class schedule controller
const classScheduleResolver = {
    Query: {
        cohort: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield allCohorts();
        }),
        CohortById: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { classId }) {
            return yield getCohortById(classId);
        }),
    },
    Mutation: {
        createCohort: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { course_id, instructor_id, cohort, start_date, end_date, class_time, training_days, cohort_capacity, venue, location, customLink, }) {
            return yield createCohort(course_id, instructor_id, cohort, start_date, end_date, class_time, training_days, cohort_capacity, venue, location, customLink);
        }),
        updateCohort: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { course_id, instructor_id, cohort, start_date, end_date, class_time, training_days, cohort_capacity, venue, location, customLink, classId, }) {
            return yield updateCohort(course_id, instructor_id, cohort, start_date, end_date, class_time, training_days, cohort_capacity, venue, location, customLink, classId);
        }),
        deleteCohort: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { classId }) {
            return yield deleteCohort(classId);
        }),
        addStudentToCohort: (_1, _a, context_1) => __awaiter(void 0, [_1, _a, context_1], void 0, function* (_, { student_id, classId }, context) {
            const jwtId = context.user;
            if (!jwtId) {
                throw new Error("unauthorized");
            }
            return yield addStudentToCohort(student_id, classId, jwtId);
        }),
    },
};
module.exports = classScheduleResolver;
