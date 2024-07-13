import React from "react";
import studentImg from "../assets/images/student-img-2.jpg";

const Student = ({ imageSrc }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={imageSrc}
        alt="Image"
        className="w-full h-full object-cover transition-opacity duration-500 ease-in-out hover:opacity-0"
      />
      <div className="absolute inset-0 flex flex-col gap-8 items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
        <img src={studentImg} alt="image" className="rounded-full" />
        <p className="text-center text-xl md:text-2xl lg:text-3xl">
          Getting into Stanford was just such an amazing shock.
          <br /> But once I got here and became so involved, got to <br /> meet
          all these wonderful people,I feel like I fit right in — <br /> and
          like I belonged here the whole time.
        </p>
        <p className="text-center text-xl font-bold">
          Meet Nadia Hemmat <br />
          Class of 2023
        </p>
      </div>
    </div>
  );
};

export default Student;
