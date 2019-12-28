import React from 'react';
import Layout from '../components/layout';
import Blog from '../components/blog';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Blog />
  </Layout>
)

export default IndexPage
