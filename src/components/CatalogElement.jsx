import { useState } from "react";
import {
  FaAngleDown,
  FaAngleRight,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa6";
import { FaArrowsUpDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CatalogElement = ({ img, frameSize, frameMaterial, feature }) => {
  const [count, setCount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handlerBtn = () => {
    setCount(count + 1);
  };

  const toggleDiv = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between  items-center border-gray-300 border-2 p-4 ">
        <Link to="/config">
          <img className="w-40" src={img} alt="" />
        </Link>
        <p>{frameSize}</p>
        <p>{frameMaterial}</p>
        <p>{feature}</p>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-2">
            <button className="secondary" onClick={handlerBtn}>
              {count}
            </button>
            <button className="secondary">+</button>
            <button className="secondary">-</button>
          </div>
          <button className="" onClick={toggleDiv}>
            Details
            <FaAngleRight className="inline-block ml-2" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="details">
          <div className="flex gap-10 ">
            <img src="https://placehold.co/600x400/png" alt="" className="" />
            <div className="grid grid-cols-2 grid-rows-2">
              <img src="https://placehold.co/600x400/png" alt="" className="" />
              <div className="flex flex-col items-center w-9">
                <FaArrowUp />
                <div className="arrow-body flex-1 border border-black w-0"></div>
                <div className="measure">120cm</div>
                <div className="arrow-body flex-1 border border-black w-0"></div>
                <FaArrowDown />
              </div>
              <div className="flex  items-center h-9">
                <FaArrowLeft />
                <div className="arrow-body flex-1 border border-black w-0"></div>
                <div className="measure">120cm</div>
                <div className="arrow-body flex-1 border border-black w-0"></div>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogElement;
