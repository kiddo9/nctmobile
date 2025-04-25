"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cohortSchema = void 0;
exports.cohortSchema = `#graphql
    type Query {
        cohort: [Cohort]
        CohortById(classId: String!): Cohort
    }

    type Cohort {
        id: ID!
        classId: String!
        course_id: String!
        instructor_id: String!
        cohort: [String]
        start_date: String!
        end_date: String!
        class_time: String!
        training_days: [String]
        cohort_capacity: Int!
        venue: String!
        location: String!
        customLink: String
    }

    type Response {
        status: String!
        message: String!
    }

    type Mutation {
        createCohort(
            course_id: String!
            instructor_id: String!
            cohort: [String]
            start_date: String!
            end_date: String!
            class_time: String!
            training_days: [String!]!
            cohort_capacity: Int!
            venue: String!
            location: String!
            customLink: String
        ): Cohort
        
        updateCohort(
            classId: String!
            course_id: String!
            instructor_id: String!
            cohort: [String]
            start_date: String!
            end_date: String!
            class_time: String!
            training_days: [String!]!
            cohort_capacity: Int!
            venue: String!
            location: String!
            customLink: String
        ): Cohort
        deleteCohort(classId: String!): Response!

        addStudentToCohort(student_id: String!, classId: String!): Cohort
    }
`;
