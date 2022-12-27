import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum CourseCategory {
  DATA_SCIENCE = "DATA_SCIENCE",
  GRAPHICS = "GRAPHICS",
  MICROSOFT_OFFICE = "MICROSOFT_OFFICE",
  PROGRAMMING = "PROGRAMMING",
  SECURITY = "SECURITY",
  PROJECT_MANAGEMENT = "PROJECT_MANAGEMENT",
  CLOUD = "CLOUD",
  SERVERS = "SERVERS"
}

export enum TrainingMethod {
  INPERSON = "INPERSON",
  ONLINE = "ONLINE",
  CORPORTATE = "CORPORTATE"
}

export enum Level {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCE = "ADVANCE"
}



type EagerInstructor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Instructor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly twitter?: string | null;
  readonly instagram?: string | null;
  readonly facebook?: string | null;
  readonly courses?: (CourseInstructor | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInstructor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Instructor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly twitter?: string | null;
  readonly instagram?: string | null;
  readonly facebook?: string | null;
  readonly courses: AsyncCollection<CourseInstructor>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Instructor = LazyLoading extends LazyLoadingDisabled ? EagerInstructor : LazyInstructor

export declare const Instructor: (new (init: ModelInit<Instructor>) => Instructor) & {
  copyOf(source: Instructor, mutator: (draft: MutableModel<Instructor>) => MutableModel<Instructor> | void): Instructor;
}

type EagerCourse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Course, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly category?: CourseCategory | keyof typeof CourseCategory | null;
  readonly isFeatured?: boolean | null;
  readonly excerpt?: string | null;
  readonly price?: number | null;
  readonly trainingMethod?: TrainingMethod | keyof typeof TrainingMethod | null;
  readonly video?: string | null;
  readonly courseDetails?: string | null;
  readonly duration?: string | null;
  readonly LearningObjective?: string | null;
  readonly CourseRequirement?: string | null;
  readonly targetAudience?: string | null;
  readonly level?: Level | keyof typeof Level | null;
  readonly curriculum?: string | null;
  readonly Instructors?: (CourseInstructor | null)[] | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCourse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Course, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly category?: CourseCategory | keyof typeof CourseCategory | null;
  readonly isFeatured?: boolean | null;
  readonly excerpt?: string | null;
  readonly price?: number | null;
  readonly trainingMethod?: TrainingMethod | keyof typeof TrainingMethod | null;
  readonly video?: string | null;
  readonly courseDetails?: string | null;
  readonly duration?: string | null;
  readonly LearningObjective?: string | null;
  readonly CourseRequirement?: string | null;
  readonly targetAudience?: string | null;
  readonly level?: Level | keyof typeof Level | null;
  readonly curriculum?: string | null;
  readonly Instructors: AsyncCollection<CourseInstructor>;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Course = LazyLoading extends LazyLoadingDisabled ? EagerCourse : LazyCourse

export declare const Course: (new (init: ModelInit<Course>) => Course) & {
  copyOf(source: Course, mutator: (draft: MutableModel<Course>) => MutableModel<Course> | void): Course;
}

type EagerCourseInstructor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CourseInstructor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly instructorId?: string | null;
  readonly courseId?: string | null;
  readonly instructor: Instructor;
  readonly course: Course;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCourseInstructor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CourseInstructor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly instructorId?: string | null;
  readonly courseId?: string | null;
  readonly instructor: AsyncItem<Instructor>;
  readonly course: AsyncItem<Course>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CourseInstructor = LazyLoading extends LazyLoadingDisabled ? EagerCourseInstructor : LazyCourseInstructor

export declare const CourseInstructor: (new (init: ModelInit<CourseInstructor>) => CourseInstructor) & {
  copyOf(source: CourseInstructor, mutator: (draft: MutableModel<CourseInstructor>) => MutableModel<CourseInstructor> | void): CourseInstructor;
}