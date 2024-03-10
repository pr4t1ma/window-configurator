import Sort from "./Sort";
import { FaSearch } from "react-icons/fa";

const Searchsection = () => {
  return (
    <div className=" container flex justify-between mb-10 mt-10 gap-6">
      <form action="" className="flex gap-2 flex-1  ">
        <input
          className="p-3 pl-5 rounded-full flex-1 border-2 outline-primary"
          type="text"
          placeholder="Type here "
        />
        <button className="rounded-full primary">
          Search <FaSearch className="inline-block ml-2" />
        </button>
      </form>
      <Sort />
    </div>
  );
};

export default Searchsection;
