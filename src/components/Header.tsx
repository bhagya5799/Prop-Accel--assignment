import React from "react";
import { Link } from "react-router-dom";
import './Style.css'

const Header:React.FC = () => {
  return (
    <nav>
      <div className="flex justify-between p-6 pr-6 text-white header">
        <div className="">
          <Link to="/">
            <h5 className="text-xl text-white">Logo</h5>
          </Link>
        </div>
        <div className="flex gap-14 ">
          <a href="#about" className=" text-xl">
            About
          </a>

          <a href="#pricing" className=" text-xl">
            Pricing
          </a>
          <a href="#review" className=" text-xl">
            Review
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
