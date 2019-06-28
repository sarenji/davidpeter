const path = require("path");

const remarkSmartypants = require("./utils/remark-smartypants");
const extension = /\.mdx?$/;

const withPlugins = require("next-compose-plugins");
const withLess = require("@zeit/next-less");
const withMDX = require("@next/mdx")({
  extension,
  options: {
    remarkPlugins: [remarkSmartypants]
  }
});

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: extension,
      use: [
        {
          loader: path.join(__dirname, "./utils/frontmatter-loader")
        }
      ]
    });

    return config;
  }
};

module.exports = withPlugins(
  [
    [withLess, { cssModules: true }],
    [withMDX, { pageExtensions: ["js", "md", "mdx"] }]
  ],
  nextConfig
);
