const postsQuery = `{
  posts: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/content/" } }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          slug
          date(formatString: "DD/MM/YYYY")
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest
  }));

const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    // indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    // settings
  }
];

module.exports = queries;