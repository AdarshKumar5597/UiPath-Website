


import React from 'react';

const ProjectStyle1 = ({ imageSrc, title, description, width }) => {
  return (
    <div className={`mx-4 w-${width} hover:shadow-md hover:text-red-500 p-4`}>
      <img className="p-1" src={imageSrc} alt={title} />
      <h3 className="mt-5 font-bold text-xl">{title}</h3>
      <p className="mt-2 font-semibold text-gray-700 text-base">{description}</p>
    </div>
  );
};

export default ProjectStyle1;
