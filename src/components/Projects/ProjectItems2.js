import React from "react";
import ProjectStyle2 from "./ProjectStyle2";
const ProjectItems2 = ({ photos }) => {
  const last = true;
  return (
    <div className="mx-10 flex flex-col md:flex-row  justify-items-center items-center">
      <ProjectStyle2
        imageSrc={photos[0]}
        // title="Abstract Shape Design"
        // description="Branding"
      />
      <ProjectStyle2
        imageSrc={photos[1]}
        // title="Abstract Shape Design"
        // description="Branding"
      />
      <ProjectStyle2
        imageSrc={photos[2]}
        // title="Abstract Shape Design"
        // description="Branding"
        last={true}
      />
    </div>
  );
};

export default ProjectItems2;
