import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { graphql } from 'gatsby';

export default function Post({ data: graphqlData }) {
  const { frontmatter: post, html } = graphqlData.markdownRemark;

  return (
    <Layout>
      <SEO title={post.title} />
      <div>
        <h1>
          { post.title }
        </h1>
        <h2>
          { post.date }
        </h2>
        <article
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html,
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;