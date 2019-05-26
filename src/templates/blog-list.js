import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import Layout from '../components/Layout'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    const firstNode = posts[0].node

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={8}>
              <Link
                style={{
                  boxShadow: 'none',
                  color: '#000',
                  fontWeight: '700',
                  fontSize: '2rem',
                }}
                to={firstNode.fields.slug}
              >
                <Img
                  fluid={
                    firstNode.frontmatter.featured.image.childImageSharp.fluid
                  }
                  alt={firstNode.frontmatter.featured.alt}
                  style={{ borderRadius: '2px' }}
                />
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}>
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                <Link
                  style={{
                    boxShadow: 'none',
                    color: '#000',
                    fontWeight: '700',
                    fontSize: '2rem',
                  }}
                  to={firstNode.fields.slug}
                >
                  {firstNode.frontmatter.title || firstNode.fields.slug}
                </Link>
              </h3>
              <div
                style={{
                  display: 'flex',
                  fontSize: '.9rem',
                  marginBottom: rhythm(1 / 4),
                }}
              >
                {firstNode.frontmatter.date}
              </div>
              <p
                style={{ marginTop: rhythm(1 / 2), marginBottom: 0 }}
                dangerouslySetInnerHTML={{ __html: firstNode.excerpt }}
              />
              <div
                style={{
                  display: 'flex',
                  flexGrow: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Link
                    to={firstNode.fields.slug}
                    style={{
                      boxShadow: 'none'
                    }}
                  >
                    <Button style={{ border: '1px solid #dadadc' }}>Read</Button>
                  </Link>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <Grid spacing={4} container justify="flex-start">
          {posts.slice(1).map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Grid
                item
                sm={4}
                key={node.fields.slug}
                style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <h3
                  style={{
                    marginBottom: 0,
                  }}
                >
                  <Link
                    style={{
                      boxShadow: 'none',
                      color: '#000',
                      fontWeight: '700',
                      fontSize: '1.25rem',
                      lineHeight: '.5rem',
                    }}
                    to={node.fields.slug}
                  >
                    {title}
                  </Link>
                </h3>
                <div style={{ fontSize: '.9rem', marginBottom: rhythm(1 / 4) }}>
                  {node.frontmatter.date}
                </div>
                <Link
                  style={{
                    boxShadow: 'none',
                    color: '#000',
                    fontWeight: '700',
                    fontSize: '2rem',
                  }}
                  to={node.fields.slug}
                >
                  <Img
                    fluid={
                      node.frontmatter.featured.image.childImageSharp.fluid
                    }
                    alt={node.frontmatter.featured.alt}
                    style={{ borderRadius: '2px' }}
                  />
                </Link>
                <p
                  style={{ marginTop: '1rem', marginBottom: 0 }}
                  dangerouslySetInnerHTML={{ __html: node.excerpt }}
                />
                <div
                  style={{
                    display: 'flex',
                    fontSize: '.9rem',
                    marginBottom: rhythm(1 / 4),
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    flexGrow: 1
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Link
                      to={node.fields.slug}
                      style={{
                        boxShadow: 'none'
                      }}
                    >
                      <Button style={{ border: '1px solid #dadadc' }}>Read</Button>
                    </Link>
                  </div>
                </div>
              </Grid>
            )
          })}
        </Grid>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
            listStyle: 'none',
            marginTop: rhythm(2),
            marginLeft: 0,
            padding: 0,
          }}
        >
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={`/${i === 0 ? '' : i + 1}`}
                style={{
                  boxShadow: 'none',
                }}
              >
                <Button style={{ background: currentPage == i + 1 ? '#ededef' : 'transparent' }}>{i + 1}</Button>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            featured {
              image {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
            }
          }
        }
      }
    }
  }
`
