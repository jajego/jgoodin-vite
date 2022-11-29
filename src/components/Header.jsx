import React from "react";
import { useEffect } from "react";
import linkedLogo from "../assets/LI-In-Bug.png";
import linkedLogoLite from "../assets/linkedin-light.png";
import gitLogo from "../assets/GitHub-Mark-32px.png";
import gitLogoLite from "../assets/GitHub-Mark-32px-light.png";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ mode, setMode, theme, switchTheme }) {
  const navigate = useNavigate();

  setTimeout(() => {
    document.getElementById("flower").addEventListener("click", (e) => {
      const bee = document.createElement("p");
      bee.classList.add("bee");
      bee.textContent = "🐝";
      bee.style.fontSize = "0.75rem";
      bee.style.animation = "disappear 1s forwards";
      bee.style.marginLeft = `${Math.floor(Math.random() * 250)}px`;
      bee.style.marginTop = `${Math.floor(Math.random() * 100)}px`;
      const beeContainer = document.createElement("div");
      beeContainer.appendChild(bee);
      beeContainer.style.position = "absolute";
      e.target.appendChild(beeContainer);
      setTimeout(() => {
        beeContainer.remove();
      }, 2000);
    });
  }, 200);

  return (
    <div className="header">
      <div className="title">
        <div className="name">
          Jamie Goodin <span id="flower">🌻</span>
        </div>
        <div className="job">Web developer</div>
      </div>
      <div className="buttons">
        <div className="projects-btn-wrapper">
          <div
            className="projects-btn"
            onClick={(e) => {
              e.preventDefault();
              if (mode == "about") {
                const projects = Array.from(
                  document.getElementsByClassName("about")
                );
                for (let node of projects) {
                  node.style.opacity = 0;
                }
                console.log(projects);
              }
              setMode("projects");
              setTimeout(() => {
                navigate("/");
              }, 200);
            }}
          >
            Projects
          </div>
        </div>
        <div className="about-btn-wrapper">
          <div
            className="about-btn"
            onClick={(e) => {
              e.preventDefault();
              if (mode == "projects") {
                const projects = Array.from(
                  document.getElementsByClassName("project-container")
                );
                for (let node of projects) {
                  node.style.opacity = 0;
                }
                console.log(projects);
              }
              setMode("about");
              setTimeout(() => {
                navigate("/about");
              }, 200);
            }}
          >
            About
          </div>
        </div>
        <div className="button linkedin">
          <a href="https://www.linkedin.com/in/jamie-goodin-073816137/">
            <img
              height="30"
              width="30"
              src={theme == "dark" ? linkedLogo : linkedLogoLite}
            />
          </a>
        </div>
        <div className="button github">
          <a href="http://github.com/jajego">
            <img
              src={theme == "dark" ? gitLogo : gitLogoLite}
              height="32"
              width="32"
            />
          </a>
        </div>
        <div className="button mode" onClick={switchTheme}>
          {theme == "dark" ? "🌙" : "☀️"}
        </div>
      </div>
    </div>
  );
}
