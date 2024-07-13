import { Button, Card } from "flowbite-react";
import React from "react";
import eventImage1 from "../assets/images/event-img-1.jpg";
import eventImage2 from "../assets/images/event-img-2.jpg";
import eventImage3 from "../assets/images/event-img-3.jpg";
import eventImage4 from "../assets/images/event-img-4.jpg";

const Events = () => {
  return (
    <div className="bg-gray-200 my-10">
      <div className="w-[80%] mx-auto py-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-primary tracking-wider">
            Upcoming Events
          </h1>
        </div>
        <div className="mx-auto my-10 grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <Card
            className="max-w-sm h-full hover:scale-110 transition-all ease-in-out cursor-pointer "
            imgAlt="image"
            imgSrc={eventImage1}
          >
            <div className="event relative">
              <h1 className="text-2xl font-bold text-white bg-black p-4">
                Jul 12th
              </h1>
            </div>
            <h5 className="text-2xl font-bold tracking-wider text-red-600 dark:text-white">
              EXHIBITION
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Branner Library Monthly Book & Map Exhibit: It's Getting Hot in
              Here(?)!
            </p>
          </Card>
          <Card
            className="max-w-sm h-full hover:scale-110 transition-all ease-in-out cursor-pointer"
            imgAlt="image"
            imgSrc={eventImage2}
          >
            <div className="event relative">
              <h1 className="text-2xl font-bold text-white bg-black p-4">
              Jul 12th
              </h1>
            </div>
            <h5 className="text-2xl font-bold tracking-tight text-red-600 dark:text-white">
              EXHIBITION
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Book Display: Travel
            </p>
            <p>12:00 PM PT</p>
          </Card>
          <Card
            className="max-w-sm h-full hover:scale-110 transition-all ease-in-out cursor-pointer"
            imgAlt="image"
            imgSrc={eventImage3}
          >
            <div className="event relative">
              <h1 className="text-2xl font-bold text-white bg-black p-4">
              Jul 12th
              </h1>
            </div>
            <h5 className="text-2xl font-bold tracking-tight text-red-600 dark:text-white">
              EARTH & CLIMATE
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Revisiting the Cambrian explosion’s spark
            </p>
          </Card>
          <Card
            className="max-w-sm h-full hover:scale-110 transition-all ease-in-out cursor-pointer"
            imgAlt="image"
            imgSrc={eventImage4}
          >
            <div className="event relative">
              <h1 className="text-2xl font-bold text-white bg-black p-4">
              Jul 12th
              </h1>
            </div>
            <h5 className="text-2xl font-bold tracking-tight text-red-600 dark:text-white">
              EARTH & CLIMATE
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Revisiting the Cambrian explosion’s spark
            </p>
          </Card>
        </div>
        <div className="flex justify-center">
        <Button className="mt-8 font-extrabold bg-primary">More Events</Button>
        </div>
      </div>
    </div>
  );
};

export default Events;
