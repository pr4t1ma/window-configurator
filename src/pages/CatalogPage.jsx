import CatalogItems from "../components/CatalagItems";

import FooterMenu from "../components/FooterMenu";
import PageHeader from "../components/PageHeader";
import Searchsection from "../components/Serchsection";
import TableHeader from "../components/TableHeader";

const CatalogPage = () => {
  return (
    <div className=" ">
      <PageHeader link="/" title="Current project catalogue" />
      <Searchsection />
      <TableHeader />
      <CatalogItems />
      <FooterMenu />
    </div>
  );
};
export default CatalogPage;
