import React from "react";

const Signup = () => {
  return (
    <div className="mt-6 flex pr-6 justify-center gap-10 text-white signup">
      <div className="pl-5 grid w-3/5">
        <h1 className="text-6xl font-bold ">
          Learn how to launch a successfull podcast
        </h1>
        <p className="mt-0 mb-1 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          excepturi assumenda eaque eum ratione. Neque adipisci dignissimos iste
          quaerat incidunt. Numquam vitae totam, nulla officiis quidem error
          corrupti vero eius!
        </p>
        <button className="signup-btn">SignUp Now</button>
      </div>
      <div className="image-card">
        <img
          src="https://res.cloudinary.com/bhagya/image/upload/v1688026306/group-business-workers-smiling-happy-confident-working-together-with-smile-face-applauding-one-them-office_1_1_wny2qv.png"
          alt="busines"
          className="business-image"
        />
        <div className="dot-continer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="dot-continer-right">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img
        className="podcost-img"
        src="https://res.cloudinary.com/bhagya/image/upload/v1688029125/solar_podcast-outline_1_gpz2uh.png"
      />
      <img
        className="mike-image"
        src="https://res.cloudinary.com/bhagya/image/upload/v1688029140/streamline_computer-voice-mail-mic-audio-mike-music-microphone_f3iuvm.png"
        alt="micke"
      />
    </div>
  );
};

export default Signup;
