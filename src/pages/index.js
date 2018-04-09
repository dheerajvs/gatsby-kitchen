import React from 'react';

import PostListing from '../components/PostListing'

const IndexPage = ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges;
  return (
    <PostListing postEdges={postEdges} />
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___datePublished], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            image {
              childImageSharp {
                sizes(maxHeight: 512) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
