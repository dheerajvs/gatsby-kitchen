import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import { List, ListGroup, ListGroupSubheader, SimpleListItem } from 'rmwc/List'
import { Typography } from 'rmwc/Typography'
import styled from 'styled-components'

import Avatar from '../components/Avatar'

const Container = styled.main`
  margin: 0 auto;
  max-width: 600px;
`

const HorizontalSection = styled.section`
  display: flex;
  align-items: center;
`

const TitleText = styled(Typography).attrs({
  use: 'title',
  tag: 'h2',
})`
  line-height: 'normal';
`

const BodyText = styled(Typography).attrs({
  use: 'body1',
  tag: 'div',
})``

const RecipePostTemplate = ({ data, pathContext }) => {
  const { frontmatter } = data.markdownRemark
  const { previous, next } = pathContext

  return (
    <Container>
      <Helmet
        title={`${frontmatter.title} | ${data.site.siteMetadata.title}`}
      />
      <article>
        <HorizontalSection style={{ padding: '16px 0' }}>
          <Avatar />
          <div>
            <Typography
              use="subheading2"
              tag="div"
              style={{ lineHeight: 'normal' }}
            >
              {frontmatter.author}
            </Typography>
            <Typography
              use="body1"
              tag="time"
              dateTime={frontmatter.datePublished}
            >
              {frontmatter.dateFormatted}
            </Typography>
          </div>
        </HorizontalSection>
        <Img sizes={frontmatter.image.childImageSharp.sizes} />
        <section style={{ padding: '0 8px 8px 8px' }}>
          <TitleText>{frontmatter.title}</TitleText>
          <BodyText>{frontmatter.description}</BodyText>
        </section>
        <section style={{ padding: '0 8px 8px 8px' }}>
          <TitleText>Ingredients</TitleText>
          <BodyText>Yield: {frontmatter.recipeYield}</BodyText>
          <ListGroup>
            {frontmatter.recipeIngredients.map((item, sectionIndex) => (
              <div key={sectionIndex}>
                <ListGroupSubheader>{item.section}</ListGroupSubheader>
                <List nonInteractive>
                  {item.ingredients.map(({ recipeIngredient }, index) => (
                    <SimpleListItem key={index} text={recipeIngredient} />
                  ))}
                </List>
              </div>
            ))}
          </ListGroup>
        </section>
        <section style={{ padding: '0 8px 8px 8px' }}>
          <TitleText>Procedure</TitleText>
          <BodyText>{`Time: ${frontmatter.time.totalHours}:${
            frontmatter.time.totalMinutes
          }`}</BodyText>
          <div>{frontmatter.recipeInstructions}</div>
        </section>
      </article>

      <ul>
        {previous && (
          <li>
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          </li>
        )}

        {next && (
          <li>
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          </li>
        )}
      </ul>
    </Container>
  )
}

export default RecipePostTemplate

export const pageQuery = graphql`
  query RecipePostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        datePublished
        dateFormatted: datePublished(formatString: "ll")
        description
        image {
          childImageSharp {
            sizes(maxHeight: 512) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        time {
          prepHours
          prepMinutes
          totalHours
          totalMinutes
        }
        recipeYield
        recipeIngredients {
          section
          ingredients {
            recipeIngredient
          }
        }
      }
    }
  }
`
