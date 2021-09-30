import React from 'react'
import PropTypes from 'prop-types'
// Utilities
import kebabCase from 'lodash/kebabCase'
// Components
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { Layout } from '../components/'
import './tags.scss'

const colors = ['#eb4559', '#f78259', '#aeefec', '#d7385e']
var currentColorIndex = -1

const TagsPage = ({
  data: {
    allMarkdownRemark: { group: tags },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <Helmet title={title} />
    <div className="tags-container">
      <h1>Tags</h1>
      <ul>
        {tags
          .sort((a, b) => {
            return b.totalCount - a.totalCount
          })
          .map(tag => {
            currentColorIndex = (currentColorIndex + 1) % 4
            return (
              <span key={tag.fieldValue}>
                <Link
                  to={`/tags/${kebabCase(tag.fieldValue)}/`}
                  style={{
                    backgroundColor: colors[currentColorIndex],
                    padding: '10px',
                    textDecoration: 'none',
                    borderRadius: '10000000px',
                    color: '#242424',
                    fontWeight: '550',
                    lineHeight: '50px'
                  }}
                >
                  {tag.fieldValue} ({tag.totalCount})
                </Link>

                <span
                  style={{
                    display: 'inline-block',
                    width: '10px'
                  }}
                ></span>
              </span>
            )
          })}
      </ul>
    </div>
  </Layout>
)
TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired
        }).isRequired
      )
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    })
  })
}

export default TagsPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
