import Config from "../config";

const fetchCourses = async (setCourses, setLoading) => {
  await fetch(Config.serverUrl + "/courses")
    .then((res) => res.json())
    .then((json) => {
      setCourses(json.courses);
      setLoading(false);
    })
    .catch((e) => {
      console.error(e);
      setLoading(false);
    });
};

export default fetchCourses;
