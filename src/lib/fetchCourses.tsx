import requestsWrapper from "../requestsWrapper";

const fetchCourses = async () => {
  return requestsWrapper.courses();
};

export default fetchCourses;
