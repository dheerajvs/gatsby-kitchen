import React from 'react';

const PostListing = ({ postEdges }) => (
  <ul>
    {
    postEdges.map(post => (
      <li key={post.node.frontmatter.title}>{post.node.frontmatter.title}</li>
    ))}
  </ul>
)

export default PostListing
