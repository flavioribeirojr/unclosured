import React from 'react';
import { graphql } from 'gatsby';
import Blog from '../../components/blog';
import SEO from '../../components/seo';

const getPosts = markdownEdges =>
  markdownEdges.map(({ node }) => node.frontmatter)

const BlogList = ({ data, pageContext }) => {
  return (
    <>
      <SEO title="Blog" />
      <Blog
        posts={getPosts(data.defaultPosts.edges)}
        numberOfPages={pageContext.numberOfPages}
        currentPage={pageContext.currentPage}
      />
    </>
  );
}

export default BlogList;

export const blogListQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    defaultPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit,
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            slug
            description
            cover
            path
            date(formatString: "DD/MM/YYYY")
          }
        }
      }
    }
  }
`;