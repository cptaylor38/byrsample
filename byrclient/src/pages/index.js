import React from "react"
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

  return (
    <Layout>
      <main>
        <section id="welcome">
          <h1>
            Garden gifts and accessories, fountains, bird baths, bird feeders,
            bird houses, candles, home accessories, lighting, unique gifts and
            decor, and so much more!
          </h1>
        </section>
        <section id="testimonials">
          <div id="quoteHolder">
            {testimonials.map((quote, index) => (
              <div className="quote" key={index}>
                "{quote}"
              </div>
            ))}
          </div>
        </section>
        <section id="storeInfo">
          <a
            href="https://www.facebook.com/The-Backyard-Retreat-114269185326252"
            target="_blank"
            rel="noreferrer"
          >
            Check us out on Facebook.
          </a>
        </section>
        <section id="gallery"></section>
      </main>
    </Layout>
  )
}

export default HomePage
