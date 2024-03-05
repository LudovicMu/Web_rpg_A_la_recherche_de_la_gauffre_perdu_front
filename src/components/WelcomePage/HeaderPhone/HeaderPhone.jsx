import NavbarPhone from "./NavbarPhone/NavbarPhone";
import { useState } from "react";
import "./HeaderPhone.scss";

import logoWaffle from "/src/assets/logo-waffle.svg";

export default function HeaderPhone() {
  const [navbarEnabled, setNavbarEnable] = useState(false);

  const handleClosing = () => {
    setNavbarEnable(false);
  };

  return (
    <header className={`phoneHeader ${navbarEnabled && "active"}`}>
      <NavbarPhone handleClosing={handleClosing} />
      <img
        className="phoneHeader__logo"
        src={logoWaffle}
        onClick={() => setNavbarEnable(!navbarEnabled)}
      />
    </header>
  );
}
