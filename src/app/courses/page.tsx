import { Metadata } from "next";

import { getAllCourses } from "@/lib/courses";

import { CourseRootView } from "@/sections/root/course/view";

export const metadata: Metadata = { title: "courses | thatonevikash" };

export default function Page() {
  const courses = getAllCourses();

  return <CourseRootView courses={courses} />;
}
