import React from 'react'
import {PhotographyProject} from '../../../components/'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '/projects/photography/2019_winter_montreal/inception.jpg',
      '/projects/photography/2019_winter_montreal/always_higher.jpg',
      '/projects/photography/2019_winter_montreal/myqueen.jpg',
      '/projects/photography/2019_winter_montreal/forward.jpg',
      '/projects/photography/2019_winter_montreal/building_9000.jpg',
      '/projects/photography/2019_winter_montreal/my_dad_used_to_carry_a_flask.jpg',
      '/projects/photography/2019_winter_montreal/pigeons_tell_the_truth.jpg',
      '/projects/photography/2019_winter_montreal/happy_buddy.jpg',
      '/projects/photography/2019_winter_montreal/heyo.jpg',
      '/projects/photography/2019_winter_montreal/into_the_shadow.jpg',
      '/projects/photography/2019_winter_montreal/a_lil_smoke.jpg',
      '/projects/photography/2019_winter_montreal/lose_it.jpg',
      '/projects/photography/2019_winter_montreal/regular.jpg',
      '/projects/photography/2019_winter_montreal/somesitting.jpg',
      '/projects/photography/2019_winter_montreal/somewalking.jpg',
      '/projects/photography/2019_winter_montreal/sunlife_highlight.jpg',
      '/projects/photography/2019_winter_montreal/texting_you.jpg',
      '/projects/photography/2019_winter_montreal/worlds_apart.jpg',
      '/projects/photography/2019_winter_montreal/larry_fisherman.jpg',
      '/projects/photography/2019_winter_montreal/yolo.jpg',
      '/projects/photography/2019_winter_montreal/mindfuck.jpg',
      '/projects/photography/2019_winter_montreal/mindfuck2.jpg',
      '/projects/photography/2019_winter_montreal/lonely.jpg',
      '/projects/photography/2019_winter_montreal/gotham.jpg',
      '/projects/photography/2019_winter_montreal/buy_a_ticket_bro.jpg',
      '/projects/photography/2019_winter_montreal/highlights_1000.jpg',
    ]

    return (
      <div>
        <PhotographyProject images={images} />
      </div>
    )
  }
}

export default BlogIndex
