const platforms: Record<string, string> = {
  "openedu.ru": "openedu",
  "www.coursera.com": "coursera",
};

const getPlatform = (courseLink: string) => {
  let url;
  try {
    url = new URL(courseLink);
    if (platforms[url.hostname]) {
      return platforms[url.hostname];
    } else {
      console.error("Cannot get platform", courseLink);
    }
  } catch (err) {
    return "unknown";
  }
  console.log(url.hostname);
  return "unknown";
};

export default getPlatform;
