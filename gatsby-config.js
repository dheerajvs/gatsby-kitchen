module.exports = {
  siteMetadata: {
    title: 'Sowmya’s Kitchen',
    author: 'Dheeraj Vepakomma',
    description: 'Cooking recipes by Sowmya',
    siteUrl: 'https://sowmya.kitchen/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/recipes`,
        name: 'recipes',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [`${__dirname}/node_modules`],
      },
    },
  ],
}
