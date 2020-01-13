import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import Blog from '../../components/blog';
import SEO from '../../components/seo';

const getPosts = markdownEdges =>
  markdownEdges.map(({ node }) => node.frontmatter)

const BlogList = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Blog
        posts={getPosts(data.allMarkdownRemark.edges)}
        numberOfPages={pageContext.numberOfPages}
        currentPage={pageContext.currentPage}
      />
    </Layout>
  );
}

export default BlogList;

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
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
            date(formatString: "DD/MM/YYYY")
          }
        }
      }
    }
  }
`;