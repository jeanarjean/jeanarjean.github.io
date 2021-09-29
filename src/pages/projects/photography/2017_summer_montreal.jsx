import React from 'react'
import {PhotographyProject} from '../../../components/'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '/projects/photography/2017_summer_montreal/love.jpg',
      '/projects/photography/2017_summer_montreal/beaver.jpg',
      '/projects/photography/2017_summer_montreal/envy.jpg',
      '/projects/photography/2017_summer_montreal/meh.jpg',
      '/projects/photography/2017_summer_montreal/monday.jpg',
      '/projects/photography/2017_summer_montreal/reading.jpg',
      '/projects/photography/2017_summer_montreal/skate.jpg',
      '/projects/photography/2017_summer_montreal/smoke.jpg',
      '/projects/photography/2017_summer_montreal/gees.jpg',
      '/projects/photography/2017_summer_montreal/watchmen.jpg',
      '/projects/photography/2017_summer_montreal/whoami.jpg',
    ]

    return (
      <div>
        <PhotographyProject images={images} />
      </div>
    )
  }
}

export default BlogIndex
