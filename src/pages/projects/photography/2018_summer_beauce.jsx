import React from 'react'
import { PhotographyProject } from '../../../components/'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '/projects/photography/2018_summer_beauce/actuallypretty.jpeg',
      '/projects/photography/2018_summer_beauce/rock.jpeg',
      '/projects/photography/2018_summer_beauce/far.jpeg'
    ]

    return (
      <div>
        <PhotographyProject images={images} />
      </div>
    )
  }
}

export default BlogIndex
