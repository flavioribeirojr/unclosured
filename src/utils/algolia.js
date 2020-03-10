const postsQuery = `{
  posts: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/content/" } }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          description
          slug
          path
          date(formatString: "DD/MM/YYYY")
        }
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest
  }));

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges)
  }
];

module.exports = queries;