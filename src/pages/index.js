import React from 'react';
// import Link from 'gatsby-link';

import PostListing from '../components/PostListing'

const IndexPage = ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges;
  return (
    <div>
      <PostListing postEdges={postEdges} />
    </div>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
    ) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
