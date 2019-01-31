const path = require("path");

const extension = /\.mdx?$/;

const withPlugins = require("next-compose-plugins");
const withLess = require("@zeit/next-less");
const withMDX = require("@zeit/next-mdx")({
  extension
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
