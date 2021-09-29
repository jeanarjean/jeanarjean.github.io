import React from 'react'
import {PhotographyProject} from '../../../components/'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '/projects/photography/2018_fall_montreal/lady2.jpg',
      '/projects/photography/2018_fall_montreal/lady.jpg',
      '/projects/photography/2018_fall_montreal/bus2.jpg',
      '/projects/photography/2018_fall_montreal/sunny.jpg',
      '/projects/photography/2018_fall_montreal/bus.jpg',
      '/projects/photography/2018_fall_montreal/cooltrains.jpg',
      '/projects/photography/2018_fall_montreal/cooltrains2.jpg',
      '/projects/photography/2018_fall_montreal/street.jpg',
      '/projects/photography/2018_fall_montreal/hurry.jpg',
      '/projects/photography/2018_fall_montreal/funfunfun.jpg',
      '/projects/photography/2018_fall_montreal/left.jpg',
      '/projects/photography/2018_fall_montreal/middle.jpg',
      '/projects/photography/2018_fall_montreal/right.jpg',
      '/projects/photography/2018_fall_montreal/saturated.jpg',
      '/projects/photography/2018_fall_montreal/memyselfandi.jpg',
      '/projects/photography/2018_fall_montreal/lorde.jpg',
      '/projects/photography/2018_fall_montreal/try.jpg',
    ]

    return (
      <div>
        <PhotographyProject images={images} />
      </div>
    )
  }
}

export default BlogIndex
