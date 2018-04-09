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
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        includePaths: [`${__dirname}/node_modules`]
      }
    },
    'gatsby-plugin-styled-components',
  ],
}
