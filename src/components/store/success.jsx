import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import './success.scss'

const Success = () => (
  <Layout>
    <div className="success-container">
      <h1>Purchase Successful</h1>
      <h2>Print #1 by jeanarjean</h2>
      <img className="print" src="/store/print1.jpg"></img>
      <p>Check your emails!</p>
      <p>Thank you!</p>
      <Link to="/">Back to jeanarjean.com</Link>
    </div>
  </Layout>
)

export default Success

