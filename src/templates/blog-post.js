import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <div style={{ maxWidth: rhythm(24), margin: '0 auto', fontSize: '1.22rem' }}>
          <h1 style={{ marginTop: 0, fontFamily: 'Merriweather' }}>{post.frontmatter.title}</h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
              marginTop: rhythm(-1),
            }}
          >
            {post.frontmatter.date}
          </p>
          <Img
            fluid={
              post.frontmatter.featured.image.childImageSharp.fluid
            }
            alt={post.frontmatter.featured.alt}
            style={{ borderRadius: '2px', marginBottom: rhythm(1) }}
          />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </div>
        <style jsx>{`
          blockquote {
            font-size: 1.8rem;
            line-height: 2.4rem;
          }
          blockquote strong {
            color: #383840;
          }
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Merriweather','Georgia',serif;
          }
          a img { box-shadow: none; }
          .gatsby-resp-image-image {
            border-radius: 2px
          }
          .gatsby-highlight-code-line {
            display: block;
            margin-right: -1em;
            margin-left: -1em;
            padding-right: 1em;
            padding-left: 0.75em;
            border-left: 0.25em solid #f99;
          }

          .gatsby-highlight {
            background-color: #1e1e1e;
            border-radius: 0.3em;
            margin: 0.5em 0;
            padding: 1em;
            overflow: auto;
          }

          .gatsby-highlight pre, .gatsby-highlight code {
            font-size: 1.0rem !important;
          }

          .gatsby-highlight pre[class*="language-"] {
            margin: 0;
            padding: 0;
            overflow: initial;
            float: left;
            min-width: 100%;
          }

          .gatsby-highlight pre[class*="language-"].line-numbers {
            padding-left: 2.8em;
          }
          
          .gatsby-highlight {
            border-radius: 0.3em;
            margin: 0.5em 0;
            padding: 1em;
            overflow: auto;
          }
          
          .gatsby-highlight pre[class*="language-"].line-numbers {
            padding: 0;
            padding-left: 2.8em;
            overflow: initial;
          }

          :not(pre) > code[class*="language-"] {
            padding: .25rem;
            font-size: 1rem;
          }
        `}</style>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 280)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`
