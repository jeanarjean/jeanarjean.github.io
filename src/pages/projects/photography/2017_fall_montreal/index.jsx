import React from 'react'
import Header from '../../../../components/Header'
import PhotographyProject from '../../../../components/PhotographyProject'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '2017_fall_montreal/back_turned.jpg',
      '2017_fall_montreal/sipping.jpg',
      '2017_fall_montreal/acutallywinter.jpeg',
      '2017_fall_montreal/call_me.jpg',
    ]

    return (
      <div>
        <Header />
        <PhotographyProject images={images} />
      </div>
    )
  }
}

export default BlogIndex
