import React from "react";
import welcomeVideo from '../assets/videos/welcome.mp4';
import { Button } from "flowbite-react";

const Banner = () => {
    return (
        <div>
            <div className="relative w-full h-[50vh] md:h-[75vh] lg:h-screen">
                <video
                    src={welcomeVideo}
                    autoPlay
                    muted
                    loop
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-white">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-wider">Welcome to Government College of Engineering, Bargur</h1>
                        <p className="text-lg md:text-2xl mt-4 px-4">Inspiring the leaders of tomorrow</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4 w-[70%] mx-auto my-6">
                <h1 className="text-4xl font-extrabold text-primary tracking-wider">A Societal Mission</h1>
                <p className="text-left font-semibold text-2xl">
                    Stanford was founded almost 150 years ago on a bedrock of societal purpose. Our mission is to contribute to the world by educating students for lives of leadership and contribution with integrity; advancing fundamental knowledge and cultivating creativity; leading in pioneering research for effective clinical therapies; and accelerating solutions and amplifying their impact.
                </p>
                <Button className="bg-primary">Know More About GCE Bargur</Button>
            </div>
        </div>
    );
};

export default Banner;
