import React from 'react'
import {PhotographyProject} from '../../../components/'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '/projects/photography/2018_summer_travel/mapleleaf.jpg',
      '/projects/photography/2018_summer_travel/crossingatdawn.jpg',
      '/projects/photography/2018_summer_travel/sunriseloup.jpg',
      '/projects/photography/2018_summer_travel/sunsetloup.jpg',
      '/projects/photography/2018_summer_travel/lostfind.jpg',
      '/projects/photography/2018_summer_travel/growing.jpg',
      '/projects/photography/2018_summer_travel/puntacanasunrise.jpg',
      '/projects/photography/2018_summer_travel/pinacollada.jpg',
      '/projects/photography/2018_summer_travel/prayineverrunoutofjetfuel.jpg',
      '/projects/photography/2018_summer_travel/hotelcalifornia.jpg',
      '/projects/photography/2018_summer_travel/cantsleep.jpg',
      '/projects/photography/2018_summer_travel/sleep.jpg',
      '/projects/photography/2018_summer_travel/tomcollins.jpg',
      '/projects/photography/2018_summer_travel/vodkalime.jpg',
      '/projects/photography/2018_summer_travel/whiterussian.jpg',
      '/projects/photography/2018_summer_travel/ofjet.jpg',
      '/projects/photography/2018_summer_travel/neverrunout.jpg',
      '/projects/photography/2018_summer_travel/jetfuel.jpg',
      '/projects/photography/2018_summer_travel/andthenIstartslipping.jpg',
    ]

    return (
      <div>
        <PhotographyProject images={images} />
      </div>
    )
  }
}

export default BlogIndex
