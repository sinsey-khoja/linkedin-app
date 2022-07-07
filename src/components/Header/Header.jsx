import Links from "./elements/Links/Links";
import Logo from "./elements/Logo";
import Profile from "./elements/Profile";
import Search from "./elements/Search";

import "./Header.scss";

function Header() {

  return (
    <header  className="header">
      <div className="nav">
      <Logo />
      <Links />
      <Search />
      <Profile />
      </div>
    </header>
  );
}

export default Header;
