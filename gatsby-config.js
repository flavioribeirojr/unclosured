const gatsbyFrontMatterTemplateParser = require('gatsby-frontmatter-template-parser');
const path = require('path');
const yamlModelsDirectory = path.join(__dirname, 'src', 'content-metadata');
require('dotenv').config();

const queries = require("./src/utils/algolia");

module.exports = {
  siteMetadata: {
    title: `unClosured.com`,
    description: `
      Blog sobre tecnologia e seu desenvolvimento. Aqui você
      poderá obter informações sobre desenvolvimento back-end(Node JS, PHP),
      front-end(JavaScript, React), além de dicas sobre padrões de projeto,
      libs e frameworks.
    `,
    author: `@flavioribeirojr`,
    siteUrl: 'https://unclosured.com',
    image: '/images/unclosured_black_background.png'
  },
  plugins: [
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/layout.js`)
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2c2b2b`,
        theme_color: `#2c2b2b`,
        display: `minimal-ui`,
        icon: `src/images/unclosured_favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      "options": {
        plugins: [
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              // a flag indicating whether the github default gist css should be included or not
              // default: true
              includeDefaultCss: true
            }
          }
        ],
        engines: {
            yaml: gatsbyFrontMatterTemplateParser({
                yamlModelsDirectory
            })
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-161620798-1",
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
