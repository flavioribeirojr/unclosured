const { createFilePath } = require("gatsby-source-filesystem")

const generateBlogPage = require('./page-generators/blog-list');
const generatePostPage = require('./page-generators/post');

exports.createPages = async function (createPageParams) {
  await generateBlogPage(createPageParams);
  await generatePostPage(createPageParams);
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value
    });
  }
}