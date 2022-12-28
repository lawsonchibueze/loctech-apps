import { withSSRContext } from "aws-amplify";
import { Course } from "../../models";
import Markdown from "react-markdown";
import { useRouter } from "next/router";

export default function CourseComponent({ course }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{course.category}</h1>
      <Markdown children={course.excerpt} />
    </div>
  );
}

export async function getStaticPaths(req) {
  const { DataStore } = withSSRContext(req);
  const courses = await DataStore.query(Course);
  const paths = courses.map((course) => ({ params: { id: course.id } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(req) {
  const { DataStore } = withSSRContext(req);
  const { params } = req;
  const { id } = params;
  const course = await DataStore.query(Course, id);

  return {
    props: {
      course: JSON.parse(JSON.stringify(course)),
    },
    revalidate: 1,
  };
}
