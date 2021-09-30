import React, { Component } from 'react'
import { Link } from 'gatsby'
import './Card.scss'

export class Card extends Component {
  render() {
    return (
      <div className="card">
        <Link to={this.props.link} className="card-link">
          <div className="card-container">
            <div className="card-title">{this.props.name}</div>
            <div className="card-image">
              <img
                src={this.props.image}
                alt={this.props.image}
                className="card-image-preview"
              />
            </div>
          </div>
        </Link>
      </div>
    )
  }
}
