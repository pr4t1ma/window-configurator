import { useState } from "react";

const Sort = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sort by relative ">
      <button
        className=" bg-gray-300 text-black   p-3"
        onClick={toggleDropdown}
      >
        Sort by
      </button>
      {isOpen && (
        <div className="dropdown absolute top-full right-0 p-3 rounded-md">
          <ul className="">
            <li className="px-8 py-2 bg-gray-300 hover:bg-gray-200">Date</li>
            <li className="px-8 py-2 bg-gray-300 hover:bg-gray-200">Name</li>
            <li className="px-8 py-2 bg-gray-300 hover:bg-gray-200">Width</li>
            <li className="px-8 py-2 bg-gray-300 hover:bg-gray-200">height</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
