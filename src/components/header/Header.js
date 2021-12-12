import Logo from "./Logo";
import Timer from "./Timer";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <Logo path="/website-logo.png" />
        <Timer />
        <Logo path="/terra-greca-logo.png" />
      </nav>
    </header>
  );
};

export default Header;
