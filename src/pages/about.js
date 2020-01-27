import React from 'react';
import Layout from './layout';
import { Link } from 'gatsby';

export default () => (
  <Layout>
    <h1>About ME</h1>
    <p>This is my personal website</p>
    <Link to="/">&larr; Back to home</Link>
  </Layout>
);
