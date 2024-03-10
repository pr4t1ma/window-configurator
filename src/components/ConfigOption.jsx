import { useState } from "react";

const ConfigOption = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" mt-3 text-center">
      {!isOpen ? (
        <button className=" bg-white align-center" onClick={toggleBtn}>
          Openable
        </button>
      ) : (
        <button className=" bg-gray-200 align-center" onClick={toggleBtn}>
          Fixed
        </button>
      )}
    </div>
  );
};

export default ConfigOption;
