import React from 'react'
import {PhotographyProject} from '../../../components/'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '/projects/photography/2018_summer_montreal/trapped.jpg',
      '/projects/photography/2018_summer_montreal/wedding.jpeg',
      '/projects/photography/2018_summer_montreal/waiting.jpg',
      '/projects/photography/2018_summer_montreal/calm.jpeg',
      '/projects/photography/2018_summer_montreal/funeral.jpeg',
      '/projects/photography/2018_summer_montreal/violonsonthefloor.jpg',
      '/projects/photography/2018_summer_montreal/bye.jpg',
      '/projects/photography/2018_summer_montreal/shoes.jpg',
      '/projects/photography/2018_summer_montreal/thinking.jpg',
      '/projects/photography/2018_summer_montreal/improve.jpg',
      '/projects/photography/2018_summer_montreal/trains.jpg',
    ]

    return (
      <div>
        <PhotographyProject images={images} />
      </div>
    )
  }
}

export default BlogIndex
