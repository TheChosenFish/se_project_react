import "./Header.css";
import headlogo from "../../assets/Logo.svg";
import avatar from "../../assets/avatar.svg";

function Header() {
  return (
    <header className="header">
      <img src={headlogo} alt="Logo Image" className="header__logo" />
      <p className="header__date-and-lo">DATE AND LOCATION</p>
      <button className="header__add-clothes">+ Add clothes</button>
      <div className="header__user-container">
        <p className="header__user-name">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
