import React from "react";
import HeroCard from "../ui/Cards/HeroCard";

const Hero = () => {
  return (
    <div className="page-section relative flex items-center">
      <div
        className="h-full w-full absolute inset-0
        bg-gradient-to-b
        from-black
        via-transparent
        to-black"
      ></div>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
        className="w-full bg-cover min-h-full"
      >
        <source
          src="https://pzpublic.s3.ap-southeast-2.amazonaws.com/Website+video+Nov.mp4"
          type="video/mp4"
        />
      </video>
      <HeroCard />
    </div>
  );
};

export default Hero;
