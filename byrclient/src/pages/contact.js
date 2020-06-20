import React from "react"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <main>
        <section id="contact-section">
          <img src={require("../images/birdsbackground.svg")} alt="birdsSVG" />
          <h2 id="contact-header">
            Reach out to us here, on{" "}
            <a
              href="https://www.facebook.com/The-Backyard-Retreat-114269185326252"
              target="_blank"
              rel="noreferrer"
            >
              Facebook,
            </a>
            {"\n"}
            or via phone at{" "}
            <a href="tel:3362421860" aria-label="3 3 6. 2 4 2. 1 8 6 0.">
              (336) 242-1860
            </a>
          </h2>
          <form
            name="contact"
            method="post"
            id="contact-form"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <label htmlFor="nameInput">Your name:</label>
            <input
              type="text"
              id="nameInput"
              name="name"
              placeholder="John Smith"
            />
            <label htmlFor="emailInput">Your email:</label>
            <input
              type="email"
              id="emailInput"
              name="email"
              placeholder="jsmith@email.com"
            />
            <textarea
              name="message"
              id="messageInput"
              type="text"
              rows="5"
              placeholder="How can we help?"
            />
            <button>Send</button>
          </form>
        </section>
      </main>
    </Layout>
  )
}

export default ContactPage
