import React, { useState } from 'react'

const ChoosePlan:React.FC = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const clickpackagebtn =()=>{
        if (!toggle){
            setToggle(true)
        }
        else{
            setToggle(false)
        }
        console.log(toggle)
    }

  return (
    <div
      className="mt-12 text-black mb-6 h-screen bg-no-repete bg-coverd bg-[url('https://res.cloudinary.com/bhagya/image/upload/v1688102093/Group_79_k41tak.png')]"
      id="pricing"
    >
      <div className="text-center w-fill ">
        <h1 className="text-4xl font-bold ">Choose Your Plan</h1>
        <p className="pl-80 pr-80 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          maiores? Corporis earum ipsa a itaque tempore possimus ratione laborum
          nisi dolor? Voluptates obcaecati, expedita aliquid libero consectetur
          impedit at quas.
        </p>

        <div className="mt-6 text-white">
          <i
            className="bg-white-600 px-6 py-2 text-black shadow-xl rounded font-bold hover:bg-pink-300 "
            onClick={clickpackagebtn}
          >
            Monthly
          </i>
          <i
            className="bg-white-600 px-6 py-2 shadow-xl rounded text-black font-bold hover:bg-pink-300"
            onClick={clickpackagebtn}
          >
            Yearly
          </i>
        </div>
      </div>
      <div className="p-12 flex justify-between  mt-24 ">
        <div className="card-one pb-3 cursor-pointer">
          <h1 className="font-bold text-xl">Basic Plan</h1>
          <p className="text-sm mt-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            explicabo reiciendis eligendi nulla molestiae perspiciatis
            voluptates veniam ut, id ullam deserunt fuga vero blanditiis beatae
            atque saepe magni dolores possimus.
          </p>
          <h1 className="mt-6 text-purple-600 ">
            <i className="text-4xl font-bold pr-3">$ 54</i>
            <i className="text-xl">/month</i>
          </h1>
          <ul className="list-disc mt-6">
            <li>Free access to Video Class</li>
            <li>free access to video class</li>
            <li>free access to video class</li>
          </ul>
          <button className="border-2 border-purple-400 mt-5 p-3 rounded">
            Start Free Trial
          </button>
        </div>
        <div className="card-one cursor-pointer bg-purple-800 text-white drop-shadow-lg ">
          <h1 className="font-bold text-xl">Premium Plan</h1>
          <p className="text-sm mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            explicabo reiciendis eligendi nulla molestiae perspiciatis
            voluptates veniam ut, id ullam deserunt fuga vero blanditiis beatae
            atque saepe magni dolores possimus.
          </p>
          <h1 className="mt-6 text-purple-600 text-white font-bold">
            <i className="text-4xl font-bold pr-3">$ 54</i>
            <i className="text-xl">/month</i>
          </h1>
          <ul className="list-disc mt-6">
            <li>Free access to Video Class</li>
            <li>free access to video class</li>
            <li>free access to video class</li>
          </ul>
          <button className="border-2 border-purple-400 mt-5 p-3 rounded text-purple-600 bg-white border-0">
            Start Free Trial
          </button>
        </div>
        <div className="card-one cursor-pointer">
          <h1 className="font-bold text-xl">Basic Plan</h1>
          <p className="text-sm mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            explicabo reiciendis eligendi nulla molestiae perspiciatis
            voluptates veniam ut, id ullam deserunt fuga vero blanditiis beatae
            atque saepe magni dolores possimus.
          </p>
          <h1 className="mt-6 text-purple-600 ">
            <i className="text-4xl font-bold pr-3">$ 54</i>
            <i className="text-xl">/month</i>
          </h1>
          <ul className="list-disc mt-6">
            <li>Free access to Video Class</li>
            <li>free access to video class</li>
            <li>free access to video class</li>
          </ul>
          <button className="border-2 border-purple-400 mt-5 p-3 rounded">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChoosePlan