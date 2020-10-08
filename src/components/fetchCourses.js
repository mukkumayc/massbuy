import Config from "../config";

const fetchCourses = async () => {
  let courses = null;
  await fetch(Config.serverUrl + "/courses")
    .then((res) => res.json())
    .then((json) => {
      courses = json.courses;
    })
    .catch((e) => {
      console.error(e);
    });
  return courses;
};

export default fetchCourses;
