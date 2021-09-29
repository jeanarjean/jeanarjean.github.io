import React from 'react'
import {PhotographyProject} from '../../../components/'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '/projects/photography/2017_summer_beauce/again.jpg',
      '/projects/photography/2017_summer_beauce/fly.jpg',
      '/projects/photography/2017_summer_beauce/andagain.jpg',
      '/projects/photography/2017_summer_beauce/pink.jpg',
      '/projects/photography/2017_summer_beauce/wakeup.jpg',
      '/projects/photography/2017_summer_beauce/welcome.jpg',
    ]

    return (
      <div>
        <PhotographyProject images={images} />
      </div>
    )
  }
}

export default BlogIndex
