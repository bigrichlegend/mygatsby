/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `My Opinionated Starter`,
    titleTemplate: `%s · a starting point`,
    author: {
      name: `Lord Bic`,
      summary: `a ballroom dancer playing at being a developer.`,
    },
    description: `My opinionated starter for Gatsby`,
    url: `https://something.or.other`,
    logo: `static/logo.png`,
    twitter: `twit`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
  ],
}
