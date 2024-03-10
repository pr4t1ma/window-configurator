import { useState } from "react";
import CatalogElement from "./CatalogElement";

const CatalogItems = () => {
  return (
    <div className="container  ">
      <CatalogElement
        img="https://via.placeholder.com/200x200"
        frameSize="frame size"
        frameMaterial="Frame material"
        feature="Feature"
      />
      <CatalogElement
        img="https://via.placeholder.com/200x200"
        frameSize="frame size"
        frameMaterial="Frame material"
        feature="Feature"
      />
      <CatalogElement
        img="https://via.placeholder.com/200x200"
        frameSize="frame size"
        frameMaterial="Frame material"
        feature="Feature"
      />
      <CatalogElement
        img="https://via.placeholder.com/200x200"
        frameSize="frame size"
        frameMaterial="Frame material"
        feature="Feature"
      />
    </div>
  );
};

export default CatalogItems;
