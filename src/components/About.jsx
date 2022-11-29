import React from "react";
import jamie from "../assets/me.jpeg";

export default function About() {
  return (
    <div className="about-container">
      <div className="about">
        <img className="me" src={jamie} height="175" width="175" />
        <p>
          Hi, I'm Jamie. I'm a web developer from New York City. I graduated
          from Macalester College and attended the Harvard Graduate School of
          Design before transitioning to programming full-time.
        </p>
        <p>
          When I'm not at my keyboard, I like hiking, making videos, and riding
          the train.
        </p>
        <p>
          Sites serve people when they're useful, simple, and fun. If you agree,
          let's work! yames.git@gmail.com
        </p>
      </div>
    </div>
  );
}
