import React from 'react'
import get from 'lodash/get'
import { Card, Layout } from '../../components/'
import './Projects.scss'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout>
        <div className="projects-container">
          <Card
            name="Photography"
            link="/projects/photography/"
            image="/projects/photography/2017_fall_montreal/sipping.jpg"
            alt="2017_fall_montreal/sipping.jpg"
          >
            {' '}
          </Card>
          <Card
            name="Programming"
            link="/projects/programming/"
            image="/projects/programming.png"
            alt="programming.jpg"
          >
            {' '}
          </Card>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex
