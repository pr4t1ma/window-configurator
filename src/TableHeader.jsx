const TableHeader = () => {
  const headerData = [
    { label: "frame size", href: "/" },
    { label: "frame material", href: "/" },
    { label: "frame feture", href: "/" },
    { label: "frame feture2", href: "/" },
  ];
  return (
    <div className="bg-gray-300 p-5">
      <ul className="flex justify-between">
        {headerData.map((item, index) => (
          <li className="" key={index}>
            <a href={index.href}></a>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableHeader;
