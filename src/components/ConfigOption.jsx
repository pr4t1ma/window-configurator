import { useState } from "react";

const ConfigOption = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" mt-3 ">
      {!isOpen ? (
        <button
          className=" secondary bg-white align-center"
          onClick={toggleBtn}
        >
          open
        </button>
      ) : (
        <button
          className=" secondary bg-white align-center"
          onClick={toggleBtn}
        >
          Fixed
        </button>
      )}
    </div>
  );
};

export default ConfigOption;
