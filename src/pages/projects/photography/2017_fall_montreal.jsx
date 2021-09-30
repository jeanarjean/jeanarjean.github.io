import React from 'react'
import { PhotographyProject } from '../../../components/'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '/projects/photography/2017_fall_montreal/back_turned.jpg',
      '/projects/photography/2017_fall_montreal/sipping.jpg',
      '/projects/photography/2017_fall_montreal/acutallywinter.jpeg',
      '/projects/photography/2017_fall_montreal/call_me.jpg'
    ]

    return (
      <div>
        <PhotographyProject images={images} />
      </div>
    )
  }
}

export default BlogIndex
