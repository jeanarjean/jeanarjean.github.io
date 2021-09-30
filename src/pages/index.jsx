import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Button, SmallCard, Newsletter, Layout } from '../components/'
import './index.scss'

class WebsiteHome extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const node = posts[0].node
    const title = get(node, 'frontmatter.title') || node.fields.slug

    return (
      <Layout>
        <div className="home-container">
          <div className="home-content">
            <h1>Last Post:</h1>
            <div key={node.fields.slug}>
              <h3>
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
            <h1>Last Photography Project:</h1>
            <div className="latest-photography-card">
              <SmallCard
                name="2021"
                link="/projects/photography/2021"
                image="/projects/photography/2021/2021-1.jpg"
                alt="/projects/photography/2021/2021-1.jpg"
                className="latest-photography-card"
              >
                {' '}
              </SmallCard>
            </div>
            <Newsletter />
          </div>
        </div>
      </Layout>
    )
  }
}

export default WebsiteHome

export const pageQuery = graphql`
  query HomeQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`
