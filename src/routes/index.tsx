import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
// import StockList from "../components/StockList";
// import Favorites from "../components/Favorites";
import NotFound from "../components/NotFound";
import Settings from "../components/Settings";
import Markets from "../components/Markets";
import Portfolio from "../components/Portfolio";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* <Route index element={<StockList />} />
        <Route path='stocks' element={<StockList />} />
        <Route path='favorites' element={<Favorites />} /> */}
        <Route path='*' element={<NotFound />} />
        {/* <Route path='home' element={<Home />} /> */}
        <Route path='settings' element={<Settings />} />
        <Route path='markets' element={<Markets />} />
        <Route path='portfolio' element={<Portfolio />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
