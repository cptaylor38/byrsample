import React from "react"

const Footer = () => {
  return (
    <footer>
      <div>
        <ul id="footer-info">
          <li>The Backyard Retreat</li>
          <li>106 S. Main St, Lexington, NC 27292</li>
          <li>336-242-1860</li>
          <li>Mon-Fri: 10:00am - 5:00pm</li>
          <li>Saturdays: 10:00am - 4:00pm</li>
          <li>tusler@mail.com</li>
        </ul>
      </div>
      <div>
        <a
          href="https://www.facebook.com/The-Backyard-Retreat-114269185326252"
          target="_blank"
          rel="noreferrer"
          id="fbLink"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1024px-F_icon.svg.png"
            alt="Facebook Link"
          ></img>
        </a>
      </div>
    </footer>
  )
}

export default Footer
