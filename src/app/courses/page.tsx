import { Metadata } from "next";

import { getAllCourses } from "@/lib/courses";

import { CourseRootView } from "@/sections/root/course/view";

export const metadata: Metadata = { title: "Courses | thatonevikash" };

export default function Page() {
  const courses = getAllCourses();

  console.log(courses);

  return <CourseRootView courses={courses} />;
}
