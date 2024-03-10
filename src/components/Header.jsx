import { FaCross } from "react-icons/fa6";

const navigationData = [
  { name: "Layout", href: "/" },
  { name: "Type", href: "/type" },
  { name: "Mesurment", href: "/mesurment" },
];

const Header = () => {
  return (
    <div className="header order-red-500 bg-primary text-white">
      <div className="container">
        <ul className="list-none flex justify-between mb-4  p-4 rounded-md    ">
          {navigationData.map((item, i) => (
            <li
              className=" border-b-2 border-transparent rounded-sm hover:border-b-2 hover:border-white"
              key={i}
            >
              <a className="" href={item.href}></a>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
