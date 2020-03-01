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
        highlitedPosts={getPosts(data.highlightedPosts.edges)}
        posts={getPosts(data.defaultPosts.edges)}
        numberOfPages={pageContext.numberOfPages}
        currentPage={pageContext.currentPage}
      />
    </Layout>
  );
}

export default BlogList;

export const blogListQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    highlightedPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3,
      skip: 0,
      filter: {
        frontmatter: {
          highlighted: {
            eq: true
          }
        }
      }
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
            date(formatString: "DD/MM/YYYY")
          }
        }
      }
    }
  }
`;