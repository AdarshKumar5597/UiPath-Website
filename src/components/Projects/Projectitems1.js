import React from "react";
import ProjectStyle1 from "./ProjectStyle1";
const ProjectItems1 = ({ photos }) => {
  return (
    <div className="mx-10 flex justify-items-center items-center">
      <ProjectStyle1
        imageSrc={photos[0]}
        // title="Abstract Modern Graphic 3D Render"
        // description="Branding"
        width="66%"
      />
      <ProjectStyle1
        imageSrc={photos[1]}
        // title="Abstract Shape Design"
        // description="Branding"
        width="33%"
      />
    </div>
  );
};

export default ProjectItems1;
