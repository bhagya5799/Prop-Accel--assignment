import React from "react";
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
import {AiOutlineInstagram} from 'react-icons/ai'


const Footer: React.FC = () => {
   
    https: return (
      <div className="footer bg-[url('https://res.cloudinary.com/bhagya/image/upload/v1688039726/Polygon_2_2_gxdhro.png')] pb-4 ">
        <h1 className="text-3xl">We have what you're looking for </h1>
        <p className="text-24 text-blue-600 ml-auto mr-auto w-3/4 mt-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          incidunt necessitatibus vitae, quas quaerat ad aliquid similique cum
          tempora atque cumque, adipisci voluptatibus asperiores illo eveniet ea
          deleniti. Hic, amet?
        </p>
        <button className="get-started-button">Get Started Now</button>
        <div className="text-white text-sm p-4 flex justify-center gap-16 text-start border-t-2 mt-12">
          <p>All right Reserved@copyright 2023</p>
          <div className="flex gap-3">
            <p>Terms of service</p>
            <p>privacy policy</p>
            <p>Product</p>
          </div>
          <div className="flex gap-4">
            <i className="text-xl cursor-pointer">
              <BsFacebook />
            </i>
            <i className="text-xl cursor-pointer">
              <BsYoutube />
            </i>
            <i className="text-xl cursor-pointer">
              <BsInstagram />
            </i>
            <i className="text-xl cursor-pointer">
              <BsTwitter />
            </i>
          </div>
        </div>
      </div>
    );
};

export default Footer;
