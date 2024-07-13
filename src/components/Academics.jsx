import React from "react";
import academicImg1 from "../assets/images/academics-img-1.webp";
import academicImg2 from "../assets/images/academics-img-2.webp";
import academicImg3 from "../assets/images/academics-img-3.webp";
import { Button } from "flowbite-react";

const Academics = () => {
  return (
    <div className="w-[80%] mx-auto my-8">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-extrabold text-primary">Academics</h1>
        <p className="text-2xl font-extrabold">
          Preparing students to make meaningful contributions to society <br />{" "}
          as engaged citizens and leaders in a complex world
        </p>
      </div>
      <div className="mx-auto my-8 grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <div className="flex flex-col gap-6 items-start">
          <div>
            <img src={academicImg1} alt="image" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Undergraduate Education</h1>
          </div>
          <div>
            <p className="font-semibold">
              Rich learning experiences that provide a broad liberal arts
              foundation and deep subject-area expertise
            </p>
          </div>
          <div>
            <a href="#" className="text-blue-600 font-bold flex gap-2 items-center hover:underline">
              Undergraduate Education{" "}
              <svg
                className="w-6 h-6 text-blue-600 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start">
          <div>
            <img src={academicImg2} alt="image" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Graduate Education</h1>
          </div>
          <div>
            <p className="font-semibold">
              Rich learning experiences that provide a broad liberal arts
              foundation and deep subject-area expertise
            </p>
          </div>
          <div>
            <a href="#" className="text-blue-600 font-bold flex gap-2 items-center hover:underline">
              Undergraduate Education{" "}
              <svg
                className="w-6 h-6 text-blue-600 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start">
          <div>
            <img src={academicImg3} alt="image" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Driving impact</h1>
          </div>
          <div>
            <p className="font-semibold">
              Rich learning experiences that provide a broad liberal arts
              foundation and deep subject-area expertise
            </p>
          </div>
          <div>
            <a href="#" className="text-blue-600 font-bold flex gap-2 items-center hover:underline">
              Undergraduate Education
              <svg
                className="w-6 h-6 text-blue-600 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="my-10 text-center">
        <h1 className="text-4xl font-extrabold text-primary">Seven schools in which to pursue your passions</h1>
        <div className="flex justify-center flex-wrap gap-4 my-8">
            <a href="#" className="text-2xl font-bold text-blue-500 decoration-blue-500 hover:underline">Medicine</a>
            <p className="font-bold text-2xl">|</p>
            <a href="#" className="text-2xl font-bold text-blue-500 decoration-blue-500 hover:underline">Law</a>
            <p className="font-bold text-2xl">|</p>
            <a href="#" className="text-2xl font-bold text-blue-500 decoration-blue-500 hover:underline">Humanities & Sciences</a>
            <p className="font-bold text-2xl">|</p>
            <a href="#" className="text-2xl font-bold text-blue-500 decoration-blue-500 hover:underline">Engineering</a>
            <p className="font-bold text-2xl">|</p>
            <a href="#" className="text-2xl font-bold text-blue-500 decoration-blue-500 hover:underline">Education</a>
            <p className="font-bold text-2xl">|</p>
            <a href="#" className="text-2xl font-bold text-blue-500 decoration-blue-500 hover:underline">Business</a>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="bg-primary font-bold">More About Academics</Button>
      </div>
    </div>
  );
};

export default Academics;
