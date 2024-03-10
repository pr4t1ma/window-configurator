import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
const PageHeader = ({ title, link }) => {
  return (
    <div className="bg-primary text-white p-6">
      <div className="container flex gap-10 py-5 ">
        {link && (
          <Link
            className="text-4xl border rounded-full w-16 h-16 flex text-center"
            to={link}
          >
            <FaAngleLeft className="self-center m-auto" />
          </Link>
        )}
        <h1>{title}</h1>
      </div>
    </div>
  );
};
export default PageHeader;
