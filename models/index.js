// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const CourseCategory = {
  "DATA_SCIENCE": "DATA_SCIENCE",
  "GRAPHICS": "GRAPHICS",
  "MICROSOFT_OFFICE": "MICROSOFT_OFFICE",
  "PROGRAMMING": "PROGRAMMING",
  "SECURITY": "SECURITY",
  "PROJECT_MANAGEMENT": "PROJECT_MANAGEMENT",
  "CLOUD": "CLOUD",
  "SERVERS": "SERVERS"
};

const TrainingMethod = {
  "INPERSON": "INPERSON",
  "ONLINE": "ONLINE",
  "CORPORTATE": "CORPORTATE"
};

const Level = {
  "BEGINNER": "BEGINNER",
  "INTERMEDIATE": "INTERMEDIATE",
  "ADVANCE": "ADVANCE"
};

const { Instructor, Course, CourseInstructor } = initSchema(schema);

export {
  Instructor,
  Course,
  CourseInstructor,
  CourseCategory,
  TrainingMethod,
  Level
};