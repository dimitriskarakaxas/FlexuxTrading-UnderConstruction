import Logo from "./Logo";
import Timer from "./Timer";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Timer />
    </header>
  );
};

export default Header;
