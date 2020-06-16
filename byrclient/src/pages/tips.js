import React from "react"
import Layout from "../components/layout"

const TipsPage = () => {
  return (
    <Layout>
      <main>
        <section class="tips-section">
          <p class="tips-header">
            Tips from Tom on{" "}
            <a
              href="https://www.youtube.com/channel/UCgR4YjSUOh3H9zf5uRRKGUg"
              target="_blank"
              rel="noreferrer"
            >
              Hometown TV Today
            </a>
          </p>
          <div class="seasonal-tips">
            <p class="tips-header">Seasonal Tips</p>
            <div class="tips-iframe-container">
              <h2 class="tips-subheader">Summer Chores</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/md1mAXsuOpI"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullscreen
                title="Summer Chores"
              ></iframe>
            </div>
            <div class="tips-iframe-container">
              <h2 class="tips-subheader">Summer Watering</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Ww5Gid-B38Q"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullscreen
                title="Summer Watering"
              ></iframe>
            </div>
            <div class="tips-iframe-container">
              <h2 class="tips-subheader">Fall Planting</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/9NzXRDJQDB4"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullscreen
                title="Fall Planting"
              ></iframe>
            </div>
            <div class="tips-iframe-container">
              <h2 class="tips-subheader">Winter Gardening</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/RWHj3amO5cQ"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullscreen
                title="Winter Gardening"
              ></iframe>
            </div>
          </div>
          <div class="msc-tips">
            <p class="tips-header">More Tips!</p>
            <div class="tips-iframe-container">
              <h2 class="tips-subheader">Container Gardening</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/KB1ZujuNvHs"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullscreen
                title="Planting Tips"
              ></iframe>
            </div>
            <div class="tips-iframe-container">
              <h2 class="tips-subheader">Raised Bed Gardens</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/N0oPkASCyDw"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullscreen
                title="Raised Bed Gardens"
              ></iframe>
            </div>
            <div class="tips-iframe-container">
              <h2 class="tips-subheader">Planting Bulbs</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/x0r28Dbc7I0"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullscreen
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
