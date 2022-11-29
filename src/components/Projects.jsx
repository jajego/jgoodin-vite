import React from "react";
import ginkgoLogo from "../assets/ginkgo-discord-icon.png";
import yorkieLogo from "../assets/train.png";

export default function Projects() {
  return (
    <div class="projects-container">
      <div class="project-container">
        <img class="ginkgo-icon" src={ginkgoLogo} width="140" height="140" />
        <div class="project-text">
          <div class="project-title">
            <a href="https://ginkgo.page">Ginkgo</a>
          </div>
          <div class="project-description">
            <div class="ginkgo-description">
              <div class="ul-text">
                A Discord bot + React app that pulls and displays shareable bird
                sighting data from Cornell's eBird API.
              </div>
              {/* <ul>
                <li>
                  Leveraged React Router library to simplify component rendering
                  logic and build unique pages based on parameterized query
                  results
                </li>
                <li>
                  Wrote a scraper to acquire images of each sighted species that
                  caches the links to prevent extraneous server requests and
                  decrease page load speeds
                </li>
                <li>
                  Employs all original assets and copy to create a unified UX
                  and distinct visual identity
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        {/* <div class="learn-more">Learn more</div> */}

        <div class="stack-items">
          <div class="stack-item">REACT</div>
          <div class="stack-item">JS</div>
          <div class="stack-item">NODE</div>
          <div class="stack-item">DISCORD.JS</div>
          <div class="stack-item">EXPRESS</div>
          <div class="stack-item">FLASK</div>
          <div class="stack-item">SQLITE</div>
          <div class="stack-item">ILLUSTRATOR</div>
        </div>
        <div class="git">
          <a href="https://github.com/jajego/birdbot">Check out the code</a>
        </div>
      </div>
      <div class="project-container">
        <img src={yorkieLogo} class="yorkie-icon" width="140" height="140" />
        <div class="project-text">
          <div class="project-title">
            <a href="https://yorkie.city">Yorkie</a>
          </div>
          <div class="project-description">
            <div class="yorkie-description">
              <div class="ul-text">
                A React app that provides up-to-date scheduling & alert
                information for all 472 NYC subway stations
              </div>
            </div>
          </div>
        </div>
        <div class="stack-items">
          <div class="stack-item">REACT</div>
          <div class="stack-item">JS</div>
          <div class="stack-item">CSS</div>
          <div class="stack-item">NODE</div>
          <div class="stack-item">FLASK</div>
          <div class="stack-item">SQLITE</div>
        </div>
        <div class="git">
          <a href="https://github.com/jajego/yorkie-backend">
            Check out the code
          </a>
        </div>
      </div>
    </div>
  );
}
