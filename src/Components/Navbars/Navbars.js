import NavBarItems from "./NavbarsItems";
import "./Navbars.css";
const NavBar = () => {
  let dummyData = [
    { label: "Inicio", uri: "#home" },
    { label: "Tarjeta", uri: "#cards" },
    { label: "Acerca", uri: "#Acerca" },
  ];
  let navBarItems = dummyData.map((o, i)=>{
    return (
            <NavBarItems
              label={o.label}
              uri={o.uri}
              key={i}>
            </NavBarItems>
          );
  });
  return (
    <nav>
      <ul>
        {navBarItems}
      </ul>
    </nav>
  );
}

export default NavBar;