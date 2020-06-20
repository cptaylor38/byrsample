import React from "react"
import Layout from "../components/layout"

const TipsPage = () => {
  return (
    <Layout>
      <main>
        <section className="tips-section">
          <p className="tips-header">
            Tips from Tom on{" "}
            <a
              href="https://www.youtube.com/channel/UCgR4YjSUOh3H9zf5uRRKGUg"
              target="_blank"
              rel="noreferrer"
            >
              Hometown TV Today
            </a>
          </p>
          <div className="seasonal-tips">
            <p className="tips-header">Seasonal Tips</p>
            <div className="tips-iframe-container">
              <h2 className="tips-subheader">Summer Chores</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/md1mAXsuOpI"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                title="Summer Chores"
              ></iframe>
            </div>
            <div className="tips-iframe-container">
              <h2 className="tips-subheader">Summer Watering</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Ww5Gid-B38Q"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                title="Summer Watering"
              ></iframe>
            </div>
            <div className="tips-iframe-container">
              <h2 className="tips-subheader">Fall Planting</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/9NzXRDJQDB4"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                title="Fall Planting"
              ></iframe>
            </div>
            <div className="tips-iframe-container">
              <h2 className="tips-subheader">Winter Gardening</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/RWHj3amO5cQ"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                title="Winter Gardening"
              ></iframe>
            </div>
          </div>
          <div className="msc-tips">
            <p className="tips-header">More Tips!</p>
            <div className="tips-iframe-container">
              <h2 className="tips-subheader">Container Gardening</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/KB1ZujuNvHs"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                title="Planting Tips"
              ></iframe>
            </div>
            <div className="tips-iframe-container">
              <h2 className="tips-subheader">Raised Bed Gardens</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/N0oPkASCyDw"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                title="Raised Bed Gardens"
              ></iframe>
            </div>
            <div className="tips-iframe-container">
              <h2 className="tips-subheader">Planting Bulbs</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/x0r28Dbc7I0"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                title="Planting Bulbs"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default TipsPage
