const items = [
  { label: "Catalog", url: "/" },
  { label: "Analytics", url: "/" },
  { label: "Info", url: "/" },
];
const FooterMenu = () => {
  return (
    <>
      <div className="bg-primary text-white mt-5 fixed w-full bottom-0 left-0">
        <ul className="flex justify-stretch">
          {items.map((item, index) => (
            <li key={index} className="w-full">
              <a
                href="#"
                className="text-2xl inline-block text-center w-full py-8 hover:bg-primary-light"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-proxy h-40"></div>
    </>
  );
};

export default FooterMenu;
