import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Buying from "./Buying";
import Selling from "./Selling";
import Eservice from "./Eservice";
import Forproviders from "./ForProviders";
import ProductService from "./ProductService";
import BuyingProductListing from "./BuyingProductListing";
import { Login } from "./Login";
const Both1 =[<ResponsiveAppBar/>,<MainContent/>,<Footer/>]
const Both2 =[<Buying/>,<BuyingProductListing/>,<Footer/>]
const Both3 =[<Selling/>,<Footer/>]
const Both4 =[<Eservice/>,<Footer/>]
const Both5 =[<Forproviders/>,<Footer/>]
const Both6 =[<ProductService/>,<Footer/>]

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Both1} />
        <Route path="/Both2" element={Both2} />
        <Route path="/Both3" element={Both3} />
        <Route path="/Both4" element={Both4} />
        <Route path="/Both5" element={Both5} />
        <Route path="/Both6" element={Both6} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}
