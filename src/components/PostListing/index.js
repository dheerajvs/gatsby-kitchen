import React from 'react'
import {
  GridList,
  GridTile,
  GridTilePrimary,
  GridTilePrimaryContent,
} from 'rmwc/GridList'
import { Typography } from 'rmwc/Typography'

const PostListing = ({ postEdges }) => (
  <GridList tileAspect="3x2">
    {postEdges.map((post, i) => (
      <GridTile key={i}>
        <GridTilePrimary>
          <GridTilePrimaryContent>
            <img
              src={require(`../../../data${post.node.frontmatter.image}`)}
              alt="test"
            />
          </GridTilePrimaryContent>
        </GridTilePrimary>
        <Typography use="title">{post.node.frontmatter.title}</Typography>
        <Typography use="subheading1">
          {post.node.frontmatter.description}
        </Typography>
      </GridTile>
    ))}
  </GridList>
)

export default PostListing
