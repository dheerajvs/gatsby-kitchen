import React from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import {
  GridList,
  GridTile,
  GridTilePrimary,
  GridTilePrimaryContent,
} from 'rmwc/GridList'

import { GridTileSecondaryStyled, GridTileTitleStyled } from './styled'

const PostListing = ({ postEdges }) => (
  <GridList tileAspect="3x2">
    {postEdges.map((post, i) => {
      const { fields, frontmatter } = post.node
      return (
        <Link key={i} to={fields.slug}>
          <GridTile>
            <GridTilePrimary>
              <GridTilePrimaryContent>
                <Img sizes={frontmatter.image.childImageSharp.sizes} />
              </GridTilePrimaryContent>
            </GridTilePrimary>
            <GridTileSecondaryStyled>
              <GridTileTitleStyled>{frontmatter.title}</GridTileTitleStyled>
            </GridTileSecondaryStyled>
          </GridTile>
        </Link>
      )
    })}
  </GridList>
)

export default PostListing
