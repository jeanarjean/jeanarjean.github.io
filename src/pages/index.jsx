import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import SmallCard from '../components/SmallCard'
import './index.scss';

class WebsiteHome extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const node = posts[0].node;
    const title = get(node, 'frontmatter.title') || node.fields.slug

    return (
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
              name="Montreal, Summer 2019"
              link="/projects/photography/2019_summer_montreal"
              image="projects/photography/2019_summer_montreal/temptation.jpg"
              alt="projects/photography/2019_summer_montreal/grad.jpg"
              className="latest-photography-card"
            >
              {' '}
            </SmallCard>
          </div>
        </div>
      </div>
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

