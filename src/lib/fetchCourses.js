const fetchCourses = async () => {
  console.log(process.env.REACT_APP_SERVER_URL);
  let courses = null;
  await fetch(process.env.REACT_APP_SERVER_URL + "/courses")
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
