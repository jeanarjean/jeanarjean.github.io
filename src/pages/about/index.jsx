import React from 'react'
import Footer from '../../components'
import Layout from '../../components'
import './about.scss'

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <div className="about-content">
            <h1>About:</h1>
            <p>
              {' '}
              Passionate about all aspects of programming and video games.
            {' '}
            </p>
            <h2>Current Interests:</h2>
            Programming
          <br />
            Reading
          <br />
            <br />
            <p>
              If you want to contact me, feel free to send an email at{' '}
              <a href="mailto:rorscharg@gmail.com">rorscharg@gmail.com</a>.
              I'll be super happy to answer and have a conversation with you!
          </p>
          </div>
          <Footer />
        </div>
      </Layout>
    )
  }
}

export default BlogIndex
