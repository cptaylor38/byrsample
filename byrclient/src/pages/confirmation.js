import React from "react"
import Layout from "../components/layout"
import "../css/index.css"

const ConfirmationPage = () => {
  return (
    <Layout>
      <main>
        <section id="confirmation-section">
          <div>
            Thank you, we'll be in touch! In the meantime, you can always reach
            us on{" "}
            <a
              href="https://www.facebook.com/The-Backyard-Retreat-114269185326252"
              target="_blank"
              rel="noreferrer"
              id="conFBLink"
            >
              Facebook.
            </a>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default ConfirmationPage
