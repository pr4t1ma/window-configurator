import CatalogItems from "../components/CatalagItems";

import FooterMenu from "../components/FooterMenu";
import PageHeader from "../components/PageHeader";
import Searchsection from "../components/Serchsection";
import TableHeader from "../components/TableHeader";

const CatalogPage = () => {
  return (
    <div className=" ">
      <PageHeader />
      <Searchsection />
      <div className="container">Total entires 15 </div>
      <TableHeader />
      <CatalogItems />
      <FooterMenu />
    </div>
  );
};
export default CatalogPage;
