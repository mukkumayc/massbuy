const platforms: [string, string][] = [
  ["openedu.ru", "OPENEDU"],
  ["coursera.org", "COURSERA"],
];

const getPlatform = (courseLink: string): string | null => {
  let url: URL;
  try {
    url = new URL(courseLink);
  } catch (err) {
    return null;
  }

  const platform = platforms.find((p) => url.hostname.endsWith(p[0]));
  if (platform) {
    return platform[1];
  } else {
    console.warn("Cannot get platform", courseLink);
  }

  return null;
};

export default getPlatform;
