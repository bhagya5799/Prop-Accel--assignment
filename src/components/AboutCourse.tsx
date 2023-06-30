import React from 'react'

const AboutCourse:React.FC= () => {
  return (
    <div
      className="flex p-6 pl-12 gap-32 text-black mt-34 position-relative"
      id="about"
    >
      <div className="flex gap-12 w-1/2">
        <div className="grid gap-3">
          <div className="px-2  py-4 max-w-sm rounded border-2 border-violet-300 ">
            <div className="font-bold text-2xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, , exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-2 mt-12 py-4 max-w-sm rounded border-2 border-violet-300  ">
            <div className="font-bold text-2xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, , exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className="grid gap-6 mt-6 ">
          <div className="px-2 py-4 max-w-sm rounded border-2 border-violet-300 ">
            <div className="font-bold text-2xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, , exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-2 py-4 mt-12  max-w-sm rounded border-2 border-violet-300 ">
            <div className="font-bold text-2xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, , exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/2 grid postion-relative static ">
        <img
          src="https://res.cloudinary.com/bhagya/image/upload/v1688108330/pngwing_1_yv2ujs.png"
          className="position-absolute top-3/4 right-0 absolute"
        />
        <h1 className="text-3xl font-bold">About the Course</h1>
        <p className="w-full">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          voluptatum! Perspiciatis ducimus ratione, magni nihil eum ad itaque
          delectus nulla earum possimus perferendis provident adipisci suscipit
          alias amet repellendus quia.
        </p>
        <button className="get-started-button">explore Now</button>
      </div>
    </div>
  );
}

export default AboutCourse;
