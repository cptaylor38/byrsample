import React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <main>
        <section id="about-container">
          <div className="about-item" id="about-mission">
            <h1>Our mission:</h1>
            <div className="about-text">
              <p>
                "We are outside in our courtyard as soon as the weather permits.
                We love entertaining for friends and family and just spending
                the evening relaxing and enjoying the outside. Candles, outdoor
                lighting, birdhouses/feeders and fountains are just a few things
                that can make your “Backyard Retreat” your own. <br />
                <br /> Our goal is for you to come in our store and say, “wow, I
                would love to have that in my garden space”. We want you to feel
                like you are outside when you are in the store browsing through
                the many unique gifts for your courtyard or garden". <br />
                <br />
                We look forward to starting this new venture and a lasting
                relationship with our customers!
                <br />
                <br /> Tom & Jeff
              </p>
            </div>
            <img
              src={require("../images/ownersfront.png")}
              alt="Tom and Jeff"
            ></img>
          </div>
          <div className="about-item" id="about-story">
            <h1>Our story:</h1>
            <img src={require("../images/owners.jpg")} alt="Tom and Jeff"></img>
            <div className="about-text">
              <p>
                In February of 2011, Tom Tussey and Jeff Miller decided to take
                a new direction in their lives. After many years of working for
                a successful retail store in Lexington NC, they decided to open
                their own store in beautiful uptown Lexington. With Tom’s eye
                for gardening and Jeff’s knowledge in design and a visit to a
                wonderful shop in downtown Kernersville NC called “Ladybug’s
                Garden and Gift Shoppe”, the inspiration was set in motion and
                “The Backyard Retreat” was created.
              </p>
            </div>
          </div>
          <div className="about-item" id="about-start">
            <h1>Our start:</h1>
            <div className="about-text">
              <p>
                April 8, 2011 - Ribbon cutting - Mayor Walser helped us cut the
                "vine" for the opening of our new store. Thanks to everyone that
                came out to our ribbon cutting today. We really appreciate all
                of your support and look forward to seeing you all real soon.
                <br />
                <br /> Tom & Jeff
              </p>
            </div>
            <img
              src={require("../images/ownersribbon.png")}
              alt="Ribbon cutting"
            ></img>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default AboutPage
