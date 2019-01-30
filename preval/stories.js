// @preval
const fs = require("fs");
const matter = require("gray-matter");

const storySlugs = fs.readdirSync("./pages/stories");
const stories = storySlugs.map(slug => {
  const path = `./pages/stories/${slug}/index.mdx`;
  const src = fs.readFileSync(path, { encoding: "utf-8" });
  const { data } = matter(src);
  return {
    ...data,
    url: `/stories/${slug}`
  };
});

module.exports = stories;
