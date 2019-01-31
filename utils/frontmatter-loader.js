// front-matter loader for mdx strips out frontmatter for mdx files
const parseMatter = require("./parse-matter");

module.exports = function(src) {
  const { content, data } = parseMatter(src);
  const contentWithMeta = `export const meta = ${JSON.stringify(data)};

${content}`;
  return contentWithMeta;
};
