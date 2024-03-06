import React from "react";
import { FaAddressBook } from "react-icons/fa6";

const ProjectStyle2 = ({
  imageSrc,
  // title,
  // description,
  last = false,
}) => {
  return (
    <div className="mx-4 relative w-full md:w-[32%] hover:shadow-md hover:text-red-500 p-4">
      <img className={`p-1 ${last && ""}`} src={imageSrc} />
      {/* <h3 className="mt-5 font-bold text-xl">{title}</h3>
      <p className="mt-2 font-semibold text-gray-700 text-base">
        {description}
      </p> */}
      {last && (
        <a href="gallery/_id">
          <h1 className=" z-10 font-semibold top-32 left-24 absolute">
            VIEW MORE
          </h1>
        </a>
      )}
    </div>
  );
};

export default ProjectStyle2;
