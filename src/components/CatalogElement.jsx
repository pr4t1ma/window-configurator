import { useState } from "react";
import { Link } from "react-router-dom";

const CatalogElement = ({ img, frameSize, frameMaterial, feature }) => {
  const [count, setCount] = useState(1);

  const handlerBtn = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex justify-between  items-center border-gray-300 border-2 p-4 ">
      <Link to="/config">
        <img className="w-40" src={img} alt="" />
      </Link>
      <p>{frameSize}</p>
      <p>{frameMaterial}</p>
      <p>{feature}</p>
      <div className="flex justify-between gap-2">
        <button className="secondary" onClick={handlerBtn}>
          {count}
        </button>
        <button className="secondary">+</button>
        <button className="secondary">-</button>
      </div>
    </div>
  );
};

export default CatalogElement;
