// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Course } = initSchema(schema);

export {
  Course
};