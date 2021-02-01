import React, { Component } from 'react'
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import './Footer.scss'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div></div>
        <div>
          <a className="external-links" href="https://instagram.com/jean.arjean">
            <FaInstagram className="icon-style" />
          </a>
          <a className="external-links" href="https://github.com/jeanarjean">
            <FaGithub className="icon-style" />
          </a>
          <a className="external-links" href="https://twitter.com/rorscharg">
            <FaTwitter className="icon-style" />
          </a>
        </div>
        <div></div>
      </footer>
    )
  }
}

export default Footer
