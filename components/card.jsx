import React from "react";

const Card = ({
  title,
  description,
  imageUrl,
  projectUrl,
  backgroundColor,
}) => {
  return (
    <div
      className={`flex-shrink-0 w-screen h-screen flex flex-col items-center justify-center ${backgroundColor}`}
    >
      <img
        className="w-[80%] h-[60%] object-cover rounded-lg"
        src={imageUrl}
        alt={title}
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 text-lg">{description}</p>
        <a
          href={projectUrl}
          target="_blank"
          className="bg-black text-white mt-4 block py-2 rounded-lg hover:bg-black/80"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default Card;