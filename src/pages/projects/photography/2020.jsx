import React from 'react'
import {PhotographyProject} from '../../../components/'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '/projects/photography/2020/2020-1.jpg',
      '/projects/photography/2020/2020-2.jpg',
      '/projects/photography/2020/2020-3.jpg',
      '/projects/photography/2020/2020-4.jpg',
      '/projects/photography/2020/2020-5.jpg',
      '/projects/photography/2020/2020-6.jpg',
      '/projects/photography/2020/2020-7.jpg',
      '/projects/photography/2020/2020-8.jpg',
      '/projects/photography/2020/2020-9.jpg',
      '/projects/photography/2020/2020-10.jpg',
      '/projects/photography/2020/2020-11.jpg',
      '/projects/photography/2020/2020-12.jpg',
      '/projects/photography/2020/2020-13.jpg',
      '/projects/photography/2020/2020-14.jpg',
      '/projects/photography/2020/2020-15.jpg',
      '/projects/photography/2020/2020-16.jpg',
      '/projects/photography/2020/2020-17.jpg',
      '/projects/photography/2020/2020-18.jpg',
      '/projects/photography/2020/2020-19.jpg',
      '/projects/photography/2020/2020-20.jpg',
      '/projects/photography/2020/2020-21.jpg',
      '/projects/photography/2020/2020-22.jpg',
      '/projects/photography/2020/2020-23.jpg',
      '/projects/photography/2020/2020-24.jpg',
      '/projects/photography/2020/2020-25.jpg',
      '/projects/photography/2020/2020-26.jpg',
      '/projects/photography/2020/2020-27.jpg',
      '/projects/photography/2020/2020-28.jpg',
    ]

    return (
      <div>
        <PhotographyProject images={images} />
      </div>
    )
  }
}

export default BlogIndex
