import React from 'react'
import {PhotographyProject} from '../../../components/'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '/projects/photography/2019_summer_montreal/grad.jpg',
      '/projects/photography/2019_summer_montreal/miss.jpg',
      '/projects/photography/2019_summer_montreal/fucktop.jpg',
      '/projects/photography/2019_summer_montreal/temptation.jpg',
      '/projects/photography/2019_summer_montreal/favoritelight.jpg',
      '/projects/photography/2019_summer_montreal/beigendeath.jpg',
      '/projects/photography/2019_summer_montreal/johnwick.jpg',
      '/projects/photography/2019_summer_montreal/reptilian.jpg',
      '/projects/photography/2019_summer_montreal/red.jpg',
      '/projects/photography/2019_summer_montreal/somethingyoulike.jpg',
      '/projects/photography/2019_summer_montreal/downdowndown.jpg',
    ]

    return (
      <div>
        <PhotographyProject images={images} />
      </div>
    )
  }
}

export default BlogIndex
