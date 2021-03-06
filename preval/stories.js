// @preval
const fs = require("fs");
const parseMatter = require("../utils/parse-matter");

// cachebust counter: 1

const storySlugs = fs.readdirSync("./pages/stories");
const stories = storySlugs
  .map((slug) => {
    const path = `./pages/stories/${slug}/index.mdx`;
    const src = fs.readFileSync(path, { encoding: "utf-8" });
    const { data } = parseMatter(src);
    return {
      url: `/stories/${slug}`,
      meta: data,
    };
  })
  // Filter out draft posts
  .filter(({ meta: { draft } }) => !draft);

module.exports = stories;
