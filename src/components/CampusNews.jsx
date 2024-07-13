import React from "react";
import gridImage1 from "../assets/images/grid-imf-1.jpeg";
import gridImage2 from "../assets/images/grid-img-2.webp";
import gridImage3 from "../assets/images/grid-img-3.webp";
import gridImage4 from "../assets/images/grid-img-4.webp";
import gridImage5 from "../assets/images/grid-img-5.webp";
import gridImage6 from "../assets/images/grid-img-6.webp";
import { Button, Card } from "flowbite-react";

const CampusNews = () => {
  return (
    <div className="bg-gray-200">
      <div className="w-[80%] mx-auto flex flex-col items-center gap-4 py-8">
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-4xl font-extrabold text-primary">Campus News</h1>
          <p className="text-2xl font-extrabold">
            Stories about people, research, and innovation across the Farm
          </p>
        </div>
        <div className="grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-4  gap-4 w-full my-8">
          <div className="col-span-2 news relative">
            <a href="#">
              <img src={gridImage1} alt="image" />
            </a>
            <div className="news-text">
            <h2 className="font-extrabold text-2xl">SCIENCE & ENGINEERING</h2>
            <p className="font-bold text-1xl">Reversing chemotherapy resistance in pancreatic cancer</p>
            </div>
          </div>
          <div className="...">
            <Card
              className="max-w-sm h-full"
              imgAlt="image"
              imgSrc={gridImage2}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              EARTH & CLIMATE
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              Revisiting the Cambrian explosion’s spark
              </p>
            </Card>
          </div>
          <div className="...">
          <Card
              className="max-w-sm h-full"
              imgAlt="image"
              imgSrc={gridImage3}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              EARTH & CLIMATE
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              Revisiting the Cambrian explosion’s spark
              </p>
            </Card>
          </div>
          <div className="...">
          <Card
              className="max-w-sm h-full"
              imgAlt="image"
              imgSrc={gridImage4}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              EARTH & CLIMATE
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              Revisiting the Cambrian explosion’s spark
              </p>
            </Card>
          </div>
          <div className="...">
          <Card
              className="max-w-sm h-full"
              imgAlt="image"
              imgSrc={gridImage5}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              EARTH & CLIMATE
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              Revisiting the Cambrian explosion’s spark
              </p>
            </Card>
          </div>
          <div className="col-span-2 news relative">
          <a href="#">
              <img src={gridImage6} alt="image" />
            </a>
            <div className="news-text">
            <h2 className="font-extrabold text-2xl">ATHLETICS</h2>
            <p className="font-bold text-1xl">Reversing chemotherapy resistance in pancreatic cancer</p>
            </div>
          </div>
        </div>
        <Button className="bg-primary">Know More About News</Button>
      </div>
    </div>
  );
};

export default CampusNews;
