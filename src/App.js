import Header from "./components/header/Header";
import Info from "./components/body/Info";
import "./App.css";

function App() {
  return (
    <div
      className="application_wrapper"
      // style={{
      //   backgroundImage: `url(${process.env.PUBLIC_URL + "/background.png"})`,
      // }}
    >
      <Header />
      <Info />
    </div>
  );
}

export default App;
