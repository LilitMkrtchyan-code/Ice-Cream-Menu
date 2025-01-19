import { useState } from "react";
import iceCreamList from "./store/iceCreamList";
import Header from "./components/header/Header";
import IceCreamMenu from "./components/IceCreamMenu/IceCreamMenu";
import Footer from "./components/footer/Footer";
import "./App.css";

const App = () => {
  const [filteredIceCreams, setFilteredIceCreams] = useState(iceCreamList);

  const filteredMenuHandler = (searchValue) => {
    const filteredList = iceCreamList.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredIceCreams(filteredList);
  };

  return (
    <div className="app">
      <Header onMenuFilter={filteredMenuHandler} />
      <IceCreamMenu iceCreamList={filteredIceCreams} />
      <Footer />
    </div>
  );
};

export default App;
