import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components'
import './404.scss'

const NotFoundPage = () => (
  <Layout>
    <div className="not-found-container">
      <h1>NOT FOUND</h1>
      <img className="not-found-image" src="/404.png"></img>
      <p>You just hit a route that doesn&#39;t exist!</p>
      <Link to="/">Back to jeanarjean.com</Link>
    </div>
  </Layout>
)

export default NotFoundPage
