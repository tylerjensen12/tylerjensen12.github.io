import React from "react";
import Project from "../components/Project";
import flip from "../pics/flippinFlopz.png";
import travel from "../pics/paroDeeJay.png";

const ProjectScreen = () => {

  let projects = [
    {
      title: "Flippin-Flopz",
      image: flip,
      description:
        "This app was built to try to challenge your trampoline skills, either by yourself or with friends. This is a Full stack web app using Vanilla JavaScript, Express, and Node.js",
        url: 'https://flippin-flopz.glitch.me/',
        demo: 'https://www.youtube.com/watch?v=TDSifwdvzbc'
      },
      {
        title: "ParoDeeJay",
        image: travel,
        description:
        "This was my take on the YouTube channel ParoDeeJay's website. This is a Full stack web app using PERN.",
        demo: 'https://www.youtube.com/watch?v=EtcZQk59w5w'
    },
  ];



  return (
    <div>
      <h2 className="text-3xl font-medium flex justify-center py-3">Projects</h2>
      <div>{projects.map((project, index) => {
        let id = project.id
        return <Project key={id} project={project} />
      })}</div>
    </div>
  );
};

export default ProjectScreen