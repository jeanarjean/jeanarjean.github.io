import React from 'react'
import {Card, Layout} from '../../../components/'
import './photography.scss'

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout>
        <div className="photography-page-container">
          <Card
            name="2021"
            link="/projects/photography/2021"
            image="2021/2021-1.jpg"
            alt="2021/2021-1.jpg"
          >
            {' '}
          </Card>
          <Card
            name="2020"
            link="/projects/photography/2020"
            image="2020/2020-1.jpg"
            alt="2020/2020-1.jpg"
          >
            {' '}
          </Card>
          <Card
            name="Montreal, Summer 2019"
            link="/projects/photography/2019_summer_montreal"
            image="2019_summer_montreal/grad.jpg"
            alt="2019_summer_montreal/grad.jpg"
          >
            {' '}
          </Card>
          <Card
            name="Montreal, Spring 2019"
            link="/projects/photography/2019_spring_montreal"
            image="2019_spring_montreal/night5.jpg"
            alt="2019_spring_montreal/night5.jpg"
          >
            {' '}
          </Card>
          <Card
            name="Montreal, Winter 2019"
            link="/projects/photography/2019_winter_montreal"
            image="2019_winter_montreal/inception.jpg"
            alt="2019_winter_montreal/highlights_1000.jpg"
          >
            {' '}
          </Card>
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
      </Layout>
    )
  }
}

export default BlogIndex
