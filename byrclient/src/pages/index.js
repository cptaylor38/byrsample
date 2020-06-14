import React, { useState } from "react"
import "../css/index.css"
import Layout from "../components/layout"

const HomePage = () => {
  const testimonials = [
    `You two have done the greatest job with this store!  The most charming inventory, great atmosphere, and most of all --- best personnel in the world!!  Huge asset to downtown. 
    ${"\n"}
    - Kay Brown`,
    `Just wanted to let you guys know that The Backyard Retreat is one of the best stores to open in Lexington, NC in many many years. It is a wonderful store with a great selection! One of mine and Elizabeth's favorites! 
    ${"\n"}
    - Sincerely, Brian Norris`,
    `Love the shop.  Well done.  An outstanding new asset for Lexington.  We wish you two success and happiness.  You are well on your way. 
    ${"\n"}
    - Newell Clark`,
    `What a pleasure to shop locally for beautiful garden art!  A patron for life. 
    ${"\n"}
    - Becky`,
    `Congratulations on a super new gardening store in Uptown Lexington. It was a joy to shop and pick up several unique items for my own garden and also for my clients. It is so nice to not have to travel out of town or order items and see them in person. Your knowledge of gardening and love of design has created the perfect place for every gardening lover to visit. Thanks for your dream come true! 
    ${"\n"}
    - Pam Nance 'The Dirt Woman'`,
    `Spring is here and you don’t want to miss a visit to The Backyard Retreat. Jeff and Tom have been working really hard to get everything ready for their opening. I had the pleasure of being there April 5th, their first day of business and was wowed by all the garden oddities.  The Backyard Retreat is definitely the place to go if you enjoy your garden and spending time in your backyard.  Their unique style and products will inspire you to be more creative with your outdoor space, making your spring and summer more fun for all your family and friends.
    ${"\n"}
    I can’t wait to get busy on Saturday setting up my beautiful water feature that I purchased from Jeff and Tom.  Everyone that sees it will want to know where I got it and I will say, “You have to go and see all the things they have at “The Backyard Retreat” – you won’t believe it!”
    ${"\n"}
    Congratulations and good job!! 
    ${"\n"}
    - Layne McCarn`,
  ]
  const [quote, setQuote] = useState(testimonials[0])

  const selectQuote = index => {
    setQuote(testimonials[index])
  }

  return (
    <Layout>
      <main>
        <div id="page-overlay"></div>
        <section id="hero">
          <h1>
            Garden gifts and accessories, fountains, bird baths, bird feeders,
            bird houses, candles, home accessories, lighting, unique gifts and
            decor, and so much more!
          </h1>
        </section>
        <section id="welcome">
          <div id="logo-container">
            <img
              src={require("../images/byrlogo.jpg")}
              alt="The Backyard Retreat"
            ></img>
          </div>
          <div id="store-info">
            <div>
              <h4>Location:</h4>
              <p>106 S. Main St, Lexington, NC 27292</p>
            </div>
            <div>
              <h4>Telephone:</h4>
              <p>336-242-1860</p>
            </div>
            <div>
              <h4>Hours:</h4>
              <p>Mon-Fri: 10:00am - 5:00pm</p>
              <p>Saturdays: 10:00am - 4:00pm</p>
            </div>
          </div>
          <div id="facebook-link">
            <a
              href="https://www.facebook.com/The-Backyard-Retreat-114269185326252"
              target="_blank"
              rel="noreferrer"
              id="facebookMsg"
            >
              ~ Find us here on Facebook ~
            </a>
          </div>
          <div id="product-overview">
            <div id="products-videos-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/sMDzSuew4hY"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                title="productVid"
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OBxTQMPIP7c"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                title="newStoreVid"
              ></iframe>
            </div>
          </div>
        </section>
        <section id="testimonials">
          <div id="testHeader">Kind words from our customers:</div>
          <div className="quote-bubble">
            <p>{quote ? <i>"{quote}"</i> : null}</p>
          </div>
          <div className="quote-bubble_arrow"></div>
          <div>
            {testimonials.map((quote, index) => (
              <button
                className="quoteBtn"
                type="button"
                key={index}
                onClick={() => selectQuote(index)}
              >
                &clubs;
              </button>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default HomePage
