import React, { Component } from 'react'
import './Button.scss'

class Button extends Component {
  render() {
    return (
      <span className="button">
        <a href={this.props.link} className="button-link">
          {this.props.label}
        </a>
      </span>
    )
  }
}

export default Button
