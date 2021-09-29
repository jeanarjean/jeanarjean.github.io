import React, { Component } from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
const url = "https://gmail.us3.list-manage.com/subscribe/post?u=fbd2100041a42b337ebbb61d2&amp;id=53ff71063f"
import './Newsletter.scss'

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div className="newsletter-container">
      <h1 className="newsletter-title">Subscribe to my newsletter</h1>
      <div className="newsletter-input">
        <input className="newsletter-email-input"
          ref={node => (email = node)}
          type="email"
          placeholder="Email"
        />
        <button className="newsletter-button" style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
          Submit
        </button>
      </div>
      <div className="newsletter-error-container">
        {status === "sending" && <div className="newsletter-error-message" style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
            className="newsletter-error-message"
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="newsletter-error-message"
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </div>
    </div>
  );
};

class Newsletter extends Component {
  render() {
    return (
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    )
  }
}

export default Newsletter