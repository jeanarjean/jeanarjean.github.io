import React, { Component } from 'react'
import { Link } from 'gatsby'
import './Header.scss'

export class Header extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
      windowWidth: 1026
    }
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this))
    this.setState({ windowWidth: window.innerWidth })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this))
    this.setState = (state, callback) => {
      return
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  renderFullscreenMenu() {
    if (this.state.isOpen) {
      return (
        <div className="overlay" style={{ width: '100%' }}>
          <a
            href="javascript:void(0)"
            className="closebtn"
            onClick={this.toggle.bind(this)}
          >
            &times;
          </a>
          <div className="overlay-content">
            <MenuItem
              name="Home"
              link="/"
              onClick={(this.state.isOpen = false)}
            />
            <br />
            <MenuItem name="Shop" link="/store" />
            <br />
            <MenuItem name="Projects" link="/projects" />
            <br />
            <MenuItem name="Thoughts" link="/blog" />
            <br />
            <MenuItem name="About" link="/about" />
          </div>{' '}
        </div>
      )
    } else {
      return <div className="overlay" />
    }
  }

  renderNavigation() {
    if (this.state.windowWidth >= 1025) {
      return (
        <div className="header-container-desktop">
          <div></div>
          <div className="header-content-desktop">
            <div className="left-desktop menu-item">
              <MenuItem name="Home" link="/" />
              <MenuItem name="Projects" link="/projects" />
            </div>
            <div className="title">
              <Link to="/" className="website-title">
                <h1>jean.arjean</h1>
              </Link>
            </div>
            <div className="right-desktop menu-item">
              <MenuItem name="Shop" link="/store" />
              <MenuItem name="Thoughts" link="/blog" />
            </div>{' '}
          </div>
        </div>
      )
    } else {
      return (
        <div className="header-content-mobile">
          <div className="title-mobile left-mobile">
            <Link to="/" className="website-title">
              <h1>jean.arjean</h1>
            </Link>
          </div>
          <div className="right-mobile">
            <div className="right-content" onClick={this.toggle.bind(this)}>
              &#9776;
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <header className="header">
        {this.renderNavigation()}
        {this.renderFullscreenMenu()}
      </header>
    )
  }
}

function MenuItem(props) {
  return (
    <div className="menu-item-container">
      <Link to={props.link}>{props.name}</Link>
    </div>
  )
}
