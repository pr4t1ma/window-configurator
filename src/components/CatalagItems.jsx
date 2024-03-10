import CatalogElement from "./CatalogElement";

const CatalogItems = () => {
  return (
    <div className="container  ">
      <CatalogElement
        img="/images/window2.jpeg"
        frameSize="frame size"
        frameMaterial="Frame material"
        feature="Feature"
      />
      <CatalogElement
        img="/images/window3.jpeg"
        frameSize="frame size"
        frameMaterial="Frame material"
        feature="Feature"
      />
      <CatalogElement
        img="/images/window4.jpeg"
        frameSize="frame size"
        frameMaterial="Frame material"
        feature="Feature"
      />
      <CatalogElement
        img="/images/window5.jpeg"
        frameSize="frame size"
        frameMaterial="Frame material"
        feature="Feature"
      />
    </div>
  );
};

export default CatalogItems;
