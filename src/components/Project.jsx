import React from "react";

const Project = ({ project }) => {
  //   if (project.includes(project.url)) {
  //     return (
  //
  //     );
  //   } else {
  //     return <p>Not Hosted</p>;
  //   }

  return (
    <div className="flex bg-slate-200 rounded-xl justify-between w-3/4 m-auto gap-5 my-8 border-slate-500 border-2 hover:drop-shadow-lg">
      <div className="p-5 ">
        <h3 className="text-2xl font-medium pb-3">{project.title}</h3>
        <p className="mb-3">{project.description}</p>
        <div className="flex justify-evenly">
          <a href={project.url} target="_blank" rel="noreferrer" className="hover:bg-slate-300 hover:rounded-lg p-1">
            Hosted Site
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="hover:bg-slate-300 hover:rounded-lg p-1">
            Demo Video
          </a>
        </div>
      </div>
      <img className="w-1/3 rounded-md" src={project.image} alt="" />
    </div>
  );
};

export default Project;
