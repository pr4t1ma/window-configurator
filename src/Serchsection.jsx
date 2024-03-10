import Sort from "./Sort";

const Searchsection = () => {
  return (
    <div className="flex justify-between mb-10 gap-10">
      <form action="" className="flex gap-2 flex-1 ">
        <input
          className="p-3 pl-5 bg-gray-300 rounded-full flex-1"
          type="text"
          placeholder="type here "
        />
        <button className="rounded-full">Search</button>
      </form>
      <Sort />
    </div>
  );
};

export default Searchsection;
