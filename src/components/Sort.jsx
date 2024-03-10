import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Sort = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sort by relative ">
      <button
        className="flex gap-2 items-center rounded-full bg-gray-300 text-black px-6 py-3"
        onClick={toggleDropdown}
      >
        Sort by <FaAngleDown />
      </button>
      {isOpen && (
        <div className="dropdown  absolute top-full right-0 rounded-md border p-1 bg-gray-300 ">
          <ul className="m-0 p-0">
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
