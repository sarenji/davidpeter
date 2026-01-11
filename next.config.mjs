import createMDX from '@next/mdx';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Allow .mdx extensions for files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      'remark-frontmatter',
      ['remark-mdx-frontmatter', { name: 'meta' }],
    ],
  },
});

export default withMDX(nextConfig);
