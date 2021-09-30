import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import { Layout } from '../components'
import './blog-post.scss'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const image = post.frontmatter.image?.childImageSharp.fluid.src
    const backgroundColor = post.frontmatter.backgroundColor
    const tags = post.frontmatter.tags
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <Layout>
        <div
          className="post-container"
          style={{
            backgroundImage: `url(${image})`,
            backgroundColor: `${backgroundColor}`
          }}
        >
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          <div className="post-content">
            <h1 className="post-title">{post.frontmatter.title}</h1>
            <p
              style={{
                display: 'block'
              }}
            >
              {post.frontmatter.date}
            </p>
            <div style={{ height: '10px' }}></div>
            <Tags tags={tags} />
            <div style={{ height: '10px' }}></div>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr />

            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                listStyle: 'none',
                padding: 0
              }}
            >
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
          </div>
        </div>
      </Layout>
    )
  }
}

function Tags(props) {
  var colors = ['#242424', '#c21025', '#c21025']
  var currentColorIndex = -1

  return (
    <div>
      {props.tags.map(function(tag) {
        currentColorIndex = (currentColorIndex + 1) % 3
        return (
          <span key={tag}>
            <Link
              to={'/tags/' + tag.replace(' ', '-')}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '10px',
                textDecoration: 'none',
                borderRadius: '10000000px',
                color: '#f8eeee',
                fontWeight: '550'
              }}
            >
              {tag}
            </Link>
            <span
              style={{
                display: 'inline-block',
                width: '6px'
              }}
            ></span>
          </span>
        )
      })}
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
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
        backgroundColor
        tags
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 2000) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`
