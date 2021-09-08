import requestsWrapper from "../requestsWrapper";
import { ICourse } from "../types";

const fetchCourses = async () => {
  const courses: ICourse[] = await requestsWrapper.get("/api/courses/all");
  return courses;
};

export default fetchCourses;
