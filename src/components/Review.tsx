import React from 'react'
import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";


const Review:React.FC = () => {
  return (
    <div className="text-black p-2 pl-6 mt-32" id="review">
      <h1 className="text-4xl font-bold ">Review from coustomers</h1>
      <p className="w-3/4 mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta inventore
        a quia animi ducimus voluptate debitis distinctio. Iure voluptate
        repellat, id a nobis, similique, cumque autem nihil ipsam iste fuga!
      </p>
      <div className="flex gap-5 mt-5 overflow-x-hidden max-width-3/2">
        <div className="review_card">
          <div className="flex gap-6">
            <img
              src="https://res.cloudinary.com/bhagya/image/upload/v1688033137/Lolla_1_u4gudl.png"
              alt="lola"
            />
            <div>
              <h3 className="font-bold">Lolla Smith</h3>
              <p>Microsoft</p>
              <div className="flex mt-3">
                <i className="text-xl text-yellow-300">
                  <AiFillStar className="text-red bg-color-red" />
                </i>
                <i className="text-xl text-yellow-300">
                  <AiFillStar />
                </i>
                <i className="text-xl text-yellow-300">
                  <AiFillStar />
                </i>
                <i className="text-xl text-yellow-300">
                  <AiFillStar />
                </i>
                <i className="text-xl text-yellow-300">
                  <AiFillStar />
                </i>
              </div>
            </div>
          </div>
          <div>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque impedit at sit deleniti est assumenda nulla dolorem
              accusamus atque autem? Quam veritatis provident hic nemo quo
              libero magnam modi voluptatum.
            </h1>
          </div>
        </div>
        <div className="review_card">
          <div className="flex gap-6">
            <img
              src="https://res.cloudinary.com/bhagya/image/upload/v1688033137/Lolla_1_u4gudl.png"
              alt="lola"
            />
            <div>
              <h3 className="font-bold">Lolla Smith</h3>
              <p>Microsoft</p>
              <div className="flex mt-3">
                <i className="text-xl text-yellow-300">
                  <AiFillStar className="text-red bg-color-red" />
                </i>
                <i className="text-xl text-yellow-300">
                  <AiFillStar />
                </i>
                <i className="text-xl text-yellow-300">
                  <AiFillStar />
                </i>
                <i className="text-xl text-yellow-300">
                  <AiFillStar />
                </i>
                <i className="text-xl text-yellow-300">
                  <AiFillStar />
                </i>
              </div>
            </div>
          </div>
          <div>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque impedit at sit deleniti est assumenda nulla dolorem
              accusamus atque autem? Quam veritatis provident hic nemo quo
              libero magnam modi voluptatum.
            </h1>
          </div>
        </div>
        <div className="review_card">
          <div className="flex gap-6">
            <img
              src="https://res.cloudinary.com/bhagya/image/upload/v1688033137/Lolla_1_u4gudl.png"
              alt="lola"
            />
            <div>
              <h3 className="font-bold">Lolla Smith</h3>
              <p>Microsoft</p>
              <div className="flex mt-3">
                <i className="text-xl text-yellow-300">
                  <AiFillStar className="text-red bg-color-red" />
                </i>
                <i className="text-xl text-yellow-300">
                  <AiFillStar />
                </i>
                <i className="text-xl text-yellow-300">
                  <AiFillStar />
                </i>
                <i className="text-xl text-yellow-300">
                  <AiFillStar />
                </i>
                <i className="text-xl text-yellow-300">
                  <AiFillStar />
                </i>
              </div>
            </div>
          </div>
          <div>
            <h1 className="flex items-start gap-2">
              <i className="p-4 bg-violet-300 rounded-full">
                <AiOutlineArrowRight className="text-2xl" />
              </i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque impedit at sit deleniti est assumenda nulla dolorem
              accusamus atque autem? Quam veritatis provident hic nemo quo
              libero magnam modi voluptatum.
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-6">
        <span className="dot"></span>
        <span className="dot bg-slate-200"></span>
        <span className="dot bg-slate-200"></span>
        <span className="dot bg-slate-200"></span>
      </div>
    </div>
  );
}

export default Review