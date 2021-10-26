const platforms: Record<string, string> = {
  "openedu.ru": "OPENEDU",
  "www.coursera.com": "COURSERA",
};

const getPlatform = (courseLink: string): string | null => {
  let url;
  try {
    url = new URL(courseLink);
    if (platforms[url.hostname]) {
      return platforms[url.hostname];
    } else {
      console.error("Cannot get platform", courseLink);
    }
  } catch (err) {
    return null;
  }
  console.log(url.hostname);
  return null;
};

export default getPlatform;
