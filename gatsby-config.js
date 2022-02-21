/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require(`path`);

module.exports = {
  /* Your site config here */
  pathPrefix: "/deqianhuang",
  plugins: [
    `gatsby-plugin-lodash`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/layout`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ZHONGDU | 中都`,
        short_name: `ZHONGDU`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `black`,
        display: `standalone`,
        icon:  `src/images/icon.png`
      },
    },
  ],
};
