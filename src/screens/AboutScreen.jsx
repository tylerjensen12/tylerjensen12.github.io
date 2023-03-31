import React from "react";

const AboutScreen = () => {
  return (
    <div>
      <h2 className="text-2xl font-medium ml-10 p-2">About Me!</h2>
      <div className="mx-20 my-3 bg-slate-100 drop-shadow-md rounded-2xl p-4 text-lg">
        <p>
          Allow me to introduce myself, my name is Tyler, and I'm a software
          engineer/developer. Along with development I enjoy spending my free
          time paddleboarding with my wife, learning new tricks on the
          trampoline, or going out for a ride on my electric unicycle.
        </p>
        <br/>
        <p>
          My development focus has been on frontend engineering using React.js
          to create reusable dynamic components for the best user experience
          possible. With a keen eye for small details, I love making sure the
          concepts and wireframes will work efficiently once in production. I
          have a passion for web accessibility and providing the best possible
          experience and use for all.
        </p>
        <br/>
        <p>
          As a life long learner I have gathered skills in
          development/engineering and many complementary skills. Some of these
          include the Spanish language, coaching, music, graphic design, video,
          social media content and strategy.
        </p>
        <br/>
        <p>
          I would love to connect with you, find me on{" "}
          <a
            href="https://www.linkedin.com/in/tylerjensen12/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "underline" }}
          >
            LinkedIn
          </a>{" "}
          and shoot me a message. You can also{" "}
          <a
            href="mailto:tylerjensen0201@gmail.com"
            style={{ textDecoration: "underline" }}
          >
            email
          </a>{" "}
          me.
          <br />
          <br />
          Feel free to check out my{" "}
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vT-YW9SI_1BASOsJDyyrTGjVlxTewaKf2eeXVZ6GeBysJ-aW3mf8R6D7Te-GvKXR3Inv9OZZOLHWUDW/pub"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "underline" }}
          >
            résumé
          </a>
          !
        </p>
      </div>
    </div>
  );
};

export default AboutScreen;
