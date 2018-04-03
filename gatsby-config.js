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
  ],
};
