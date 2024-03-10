import { FaAngleLeft } from "react-icons/fa6";
const PageHeader = () => {
  return (
    <div className="bg-primary text-white p-6">
      <div className="container flex gap-10 py-5 ">
        <button className="text-4xl border rounded-full px-2 ">
          <FaAngleLeft />
        </button>
        <h1>Current Project Catelog</h1>
      </div>
    </div>
  );
};
export default PageHeader;
