import "./App.css";
const navigationData = [
  { name: "Layout", href: "/" },
  { name: "Type", href: "/type" },
  { name: "Mesurment", href: "/mesurment" },
];

const Header = () => {
  return (
    <div className="header">
      <ul className="list-none flex justify-between mb-4 bg-slate-300 p-4 rounded-md">
        {navigationData.map((item, i) => (
          <li
            className=" border-b-2 border-transparent rounded-sm hover:border-b-2 hover:border-black"
            key={i}
          >
            <a className="" href={item.href}></a>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
