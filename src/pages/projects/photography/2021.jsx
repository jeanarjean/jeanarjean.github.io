import React from 'react'
import PhotographyProject from '../../../components/PhotographyProject'

class PhotoAlbum2021 extends React.Component {
  render() {
    const images = [
      '/projects/photography/2021/2021-1.jpg',
      '/projects/photography/2021/2021-2.jpg',
      '/projects/photography/2021/2021-3.jpg',
      '/projects/photography/2021/2021-4.jpg',
      '/projects/photography/2021/2021-5.jpg',
    ]

    return (
      <div>
        <PhotographyProject images={images} />
      </div>
    )
  }
}

export default PhotoAlbum2021
