import Logo from "./Logo";
import Timer from "./Timer";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <Logo />
        <Timer />
      </nav>
    </header>
  );
};

export default Header;
