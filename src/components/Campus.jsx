import React from 'react';
import { Button } from 'flowbite-react';
import campusImg1 from '../assets/images/Campus-life-1.webp'
import campusImg2 from '../assets/images/Campus-life-2.webp'
import campusImg3 from '../assets/images/Campus-life-3.webp'

const cardData = [
  {
    image: campusImg1,
    title: 'Student Life',
    description: 'A residential campus with diverse housing, exceptional dining, and over 600 student organizations',
    link: '#',
    linkText: 'Student Affairs'
  },
  {
    image: campusImg2,
    title: 'Arts & Culture',
    description: 'A residential campus with diverse housing, exceptional dining, and over 600 student organizations',
    link: '#',
    linkText: 'Arts & Culture'
  },
  {
    image: campusImg3,
    title: 'Recreation & Wellness',
    description: 'A residential campus with diverse housing, exceptional dining, and over 600 student organizations',
    link: '#',
    linkText: 'Recreation & Wellness'
  }
];

const Campus = () => {
  return (
    <div className="w-[80%] mx-auto my-8">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-extrabold text-primary">Campus Life</h1>
        <p className="text-2xl font-extrabold">
        Building a vibrant community of creative and accomplished <br /> people from around the world
        </p>
      </div>
      <div className="mx-auto my-8 grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-full">
        {cardData.map((card, index) => (
          <div key={index} className="flex flex-col gap-6 items-start">
            <div>
              <img src={card.image} alt="image" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{card.title}</h1>
            </div>
            <div>
              <p className="font-semibold">{card.description}</p>
            </div>
            <div>
              <a href={card.link} className="text-blue-600 font-bold flex gap-2 items-center hover:underline">
                {card.linkText}
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
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="bg-primary font-bold">More About Campus</Button>
      </div>
    </div>
  );
}

export default Campus;
