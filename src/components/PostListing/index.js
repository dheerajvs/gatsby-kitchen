import React from 'react'
import Img from 'gatsby-image'
import {
  GridList,
  GridTile,
  GridTilePrimary,
  GridTilePrimaryContent,
} from 'rmwc/GridList'
import { Typography } from 'rmwc/Typography'

const PostListing = ({ postEdges }) => (
  <GridList tileAspect="3x2">
    {postEdges.map((post, i) => {
      const { frontmatter } = post.node
      return (
        <GridTile key={i}>
          <GridTilePrimary>
            <GridTilePrimaryContent>
              <Img sizes={frontmatter.image.childImageSharp.sizes} />
            </GridTilePrimaryContent>
          </GridTilePrimary>
          <Typography use="title">{frontmatter.title}</Typography>
          <Typography use="subheading1">{frontmatter.description}</Typography>
        </GridTile>
      )
    })}
  </GridList>
)

export default PostListing
