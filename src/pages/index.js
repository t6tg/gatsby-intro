import React from 'react';
import { Link } from 'gatsby';
import Layout from './layout';

export default () => (
  <Layout>
    <h1>Home</h1>
    <p>Hello Thanawat Gulati</p>
    <Link to="/about">About &rarr;</Link>
  </Layout>
);
