const matter = require("gray-matter");

const parseMatter = src => {
  const { content, data } = matter(src);
  return {
    content,
    data: {
      ...data,
      wordCount: content.split(" ").length
    }
  };
};

module.exports = parseMatter;
