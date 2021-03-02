import NavBar from "../Navbars/Navbars";
import Brand from "./Brand";
import "./BrandHeader.css";
const BrandHeader = ({ children }) => {
  return (
    <header>
      <Brand title="Landing Page."></Brand>
      <NavBar></NavBar>
    </header>
  );
}

export default BrandHeader;