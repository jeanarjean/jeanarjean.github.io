import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Header from '../../../components/Header'
import Card from '../../../components/Card'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Header />
        <Card
          name="Montreal, Fall 2018"
          link="/projects/photography/2018_fall_montreal"
          image="2018_fall_montreal/lady2.jpg"
          alt="2018_fall_montreal/lady2.jpg"
        >
          {' '}
        </Card>
        <Card
          name="Travel, Summer 2018"
          link="/projects/photography/2018_summer_travel"
          image="2018_summer_travel/mapleleaf.jpg"
          alt="2018_summer_travel/mapleleaf.jpg"
        >
          {' '}
        </Card>
        <Card
          name="Montreal, Summer 2018"
          link="/projects/photography/2018_summer_montreal"
          image="2018_summer_montreal/trapped.jpg"
          alt="2018_summer_montreal/trapped.jpg"
        >
          {' '}
        </Card>
        <Card
          name="Beauce, Summer 2018"
          link="/projects/photography/2018_summer_beauce"
          image="2018_summer_beauce/actuallypretty.jpeg"
          alt="2018_summer_beauce/actuallypretty.jpeg"
        >
          {' '}
        </Card>
        <Card
          name="Montreal, Fall 2017"
          link="/projects/photography/2017_fall_montreal"
          image="2017_fall_montreal/back_turned.jpg"
          alt="2017_fall_montreal/back_turned.jpg"
        >
          {' '}
        </Card>
        <Card
          name="Beauce, Summer  2017"
          link="/projects/photography/2017_summer_beauce"
          image="2017_summer_beauce/again.jpg"
          alt="2017_summer_beauce/again.jpg"
        >
          {' '}
        </Card>
        <Card
          name="Montreal, Summer 2017"
          link="/projects/photography/2017_summer_montreal"
          image="2017_summer_montreal/love.jpg"
          alt="2017_summer_montreal/love.jpg"
        >
          {' '}
        </Card>
      </div>
    )
  }
}

export default BlogIndex
