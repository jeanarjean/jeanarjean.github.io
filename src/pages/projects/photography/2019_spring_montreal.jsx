import React from 'react'
import { PhotographyProject } from '../../../components/'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '/projects/photography/2019_spring_montreal/night5.jpg',
      '/projects/photography/2019_spring_montreal/night1.jpg',
      '/projects/photography/2019_spring_montreal/night2.jpg',
      '/projects/photography/2019_spring_montreal/night3.jpg',
      '/projects/photography/2019_spring_montreal/night4.jpg',
      '/projects/photography/2019_spring_montreal/mist.jpg',
      '/projects/photography/2019_spring_montreal/pink.jpg',
      '/projects/photography/2019_spring_montreal/pink2.jpg',
      '/projects/photography/2019_spring_montreal/bnw3.jpg',
      '/projects/photography/2019_spring_montreal/punch.jpg',
      '/projects/photography/2019_spring_montreal/bnw4.jpg',
      '/projects/photography/2019_spring_montreal/bnw5.jpg',
      '/projects/photography/2019_spring_montreal/rene.jpg',
      '/projects/photography/2019_spring_montreal/blackonblack.jpg',
      '/projects/photography/2019_spring_montreal/bullshit.jpg',
      '/projects/photography/2019_spring_montreal/blue.jpg',
      '/projects/photography/2019_spring_montreal/life.jpg',
      '/projects/photography/2019_spring_montreal/hood.jpg',
      '/projects/photography/2019_spring_montreal/cats.jpg',
      '/projects/photography/2019_spring_montreal/go.jpg',
      '/projects/photography/2019_spring_montreal/mean.jpg',
      '/projects/photography/2019_spring_montreal/polondeath.jpg',
      '/projects/photography/2019_spring_montreal/suitndeath.jpg',
      '/projects/photography/2019_spring_montreal/orange.jpg',
      '/projects/photography/2019_spring_montreal/orangetruck.jpg'
    ]

    return (
      <div>
        <PhotographyProject images={images} />
      </div>
    )
  }
}

export default BlogIndex
