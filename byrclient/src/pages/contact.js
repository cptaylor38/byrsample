import React from "react"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <main>
        <section id="contact-section">
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <label htmlFor="name">Your name:</label>
            <input type="text" name="name" placeholder="John Smith" />
            <label htmlFor="email">Your email:</label>
            <input type="email" name="email" placeholder="jsmith@email.com" />
            <label htmlFor="message">How can we help?</label>
            <textarea name="message" type="input" />
            <button>Send</button>
          </form>
        </section>
      </main>
    </Layout>
  )
}

export default ContactPage
