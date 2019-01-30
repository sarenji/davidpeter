// front-matter loader for mdx strips out frontmatter for mdx files
const matter = require("gray-matter");

module.exports = function(src) {
  const { content } = matter(src);
  return content;
};
