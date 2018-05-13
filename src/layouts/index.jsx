import React from 'react'
import Link from 'gatsby-link'
import './layouts.scss'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return <div>{children()}</div>
  }
}

export default Template
