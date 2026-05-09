import path from "path";

const processPath = (dir: string): string => path.join(process.cwd(), dir);

export const paths = {
  content: processPath("content"),
  courses: processPath("courses"),
};
