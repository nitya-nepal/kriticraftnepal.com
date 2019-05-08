import React from 'react';
// import Link from 'gatsby-link'
// import { graphql } from 'gatsby'
// import Layout from '../components/layout'
import Header from '../components/header';
import LatestProducts from '../components/latest_products';
import AboutUs from '../components/about_us';
import Products from '../components/products';
import Testimonial from '../components/testimonial';
import Footer from '../components/footer';
import '../components/layout/index.scss';

const IndexPage = () => {
  return (
    <>
      <Header />
      <LatestProducts />
      <AboutUs />
      <Products />
      <Testimonial />
      <Footer />
    </>
  );
};

export default IndexPage;

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           excerpt(pruneLength: 400)
//           id
//           frontmatter {
//             title
//             contentType
//             date(formatString: "MMMM DD, YYYY")
//             path
//             hidden
//           }
//         }
//       }
//     }
//   }
// `
