import React, { Component } from 'react'
import { Link } from 'gatsby'
import './SmallCard.scss'

export class SmallCard extends Component {
  render() {
    return (
      <div className="small-card">
        <Link to={this.props.link} className="small-card-link">
          <div className="small-card-container">
            <div className="small-card-title">{this.props.name}</div>
            <div className="small-card-image">
              <img
                src={this.props.image}
                alt={this.props.image}
                className="small-card-image-preview"
              />
            </div>
          </div>
        </Link>
      </div>
    )
  }
}
