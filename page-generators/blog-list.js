const path = require('path');

const POSTS_PER_PAGE = 5;

module.exports = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const posts = await getPosts({ graphql, reporter });
  const numberOfPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const createBlogPage = getBlogPageCreator({ createPage, numberOfPages });

  Array.from({ length: numberOfPages }).forEach(createBlogPage);
}

const getPosts = async ({ graphql, reporter }) => {
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild('Error while running Blog List GraphQL query.');
    return;
  }

  return result.data.allMarkdownRemark.edges;
}

const getBlogPageCreator = ({ createPage, numberOfPages }) => (_, index) => {
  createPage({
    path: index === 0 ? '/' : `/blog/${index + 1}`,
    component: path.resolve('./src/templates/blog-list/index.js'),
    context: {
      limit: POSTS_PER_PAGE,
      skip: 3 + (index * POSTS_PER_PAGE),
      numberOfPages,
      currentPage: index + 1
    }
  });
}