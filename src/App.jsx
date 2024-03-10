import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import ConfigPage from "./pages/ConfigPage";

import ProjectListPage from "./pages/ProjectListPage";

function App() {
  return (
    <div className=" wrapper  h-screen b">
      <div className="">
        <Router>
          <Routes>
            <Route exact path="/" element={<ProjectListPage />} />
            <Route exact path="/config" element={<ConfigPage />} />
            <Route exact path="/catalog" element={<CatalogPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
