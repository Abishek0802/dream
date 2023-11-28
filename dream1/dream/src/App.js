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
import ContactUs from "./ContactUs";


const Page1 =[<ResponsiveAppBar/>,<MainContent/>,<Footer/>]
const Page2 =[<Buying/>,<BuyingProductListing/>,<Footer/>]
const Page3 =[<Selling/>,<Footer/>]
const Page4 =[<Eservice/>,<Footer/>]
const Page5 =[<Forproviders/>,<Footer/>]
const Page6 =[<ProductService/>,<Footer/>]




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Page1} />
        <Route path="/Both2" element={Page2} />
        <Route path="/Both3" element={Page3} />
        <Route path="/Both4" element={Page4} />
        <Route path="/Both5" element={Page5} />
        <Route path="/Both6" element={Page6} />
        <Route path="/ContactUs" element={<ContactUs/>} />
       
      </Routes>
    </BrowserRouter>
  );
}
