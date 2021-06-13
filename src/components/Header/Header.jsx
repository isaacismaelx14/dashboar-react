import { useState } from "react";
import "./Header.scss";
import SettingsIcon from "../Icons/SettingsIcon";

function Header() {
  const [clicked, setclicked] = useState(false);
  const handleConfigClick = () => {
    setclicked(true);
  };
  return (
    <header data-testid="headerComponent" className="HeaderComponent">
      <div className="header-area">
        <div className="p-container header-container">
          <div className="p-title_container">
            <span className="p-title">
              Social <strong>Dashboard</strong>
            </span>
          </div>
          <nav className="header-nav">
            <span
              role="button"
              className="link"
              onClick={handleConfigClick}
              data-clicked={clicked}
              tabIndex="0"
            >
              <SettingsIcon className="icon" />
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
