const themeOptions = require('gatsby-theme-apollo-docs/theme-options');

module.exports = {
  pathPrefix: '/docs/apollo-server',
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: 'Apollo Server',
        description: 'A guide to using Apollo Server',
        githubRepo: 'edabot/server-clone',
        defaultVersion: '1',
        sidebarCategories: {
          null: [
            'index',
            'getting-started',
            '[Changelog](https://github.com/apollographql/apollo-server/blob/master/CHANGELOG.md)',
          ],
        },
      },
    },
  ],
};
