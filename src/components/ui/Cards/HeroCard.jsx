import React from "react";

const HeroCard = () => {
  return (
    <div className="absolute left-24 top-32 bg-gray-800/80 h-96 w-80 p-6 rounded-lg flex flex-col gap-3 items-center justify-between">
      <h1 className="text-3xl text-white text-center font-semibold">
        Men's Hormone & Holistic Health
      </h1>
      <p className="text-center text-xl font-thin text-white">
        We’ll provide you a personalised hormone and holistic health plan to get
        you back in your prime.
      </p>
      <input
        className="input input-bordered w-full"
        type="email"
        placeholder="ryan@hormonesforme.com"
      />
      <button className="btn btn-primary w-full gradient-btn">SIGN UP</button>
    </div>
  );
};

export default HeroCard;
