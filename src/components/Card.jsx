import React, { Component } from 'react'
import Link from 'gatsby-link'
import Images from './PhotographyProject'
import './Card.scss'

class PhotographyProjectPreviewBox extends Component {
    render() {
        return (
            <div className="card">
                <Link to={this.props.link} className="card-link">
                    <div className="card-container">
                        <div className="card-image">
                            <img
                                src={this.props.image}
                                alt={this.props.image}
                                className="card-image-preview"
                            />
                        </div>
                        <div className="card-title">{this.props.name}</div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default PhotographyProjectPreviewBox
