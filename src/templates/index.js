import React from 'react'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
// import Link from 'gatsby-link'
// import { graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <Container>
          <Card style={{marginBottom: 10}}>
            <CardBody>
              <CardTitle>Hello</CardTitle>
              <CardSubtitle style={{marginBottom: 10}}>Worlds</CardSubtitle>
              <CardText>This is blank</CardText>
            </CardBody>
          </Card>
      </Container>
    </Layout>
  )
}

export default IndexPage

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
