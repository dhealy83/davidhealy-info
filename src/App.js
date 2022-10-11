import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  // const currentPage = "Bio";
  const [currentPage, setCurrentPage] = useState("HomePage");
  function render() {
    if (currentPage === "Bio") {
      return <Bio />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    } else if (currentPage === "MyWork") {
      return <MyWork />;
    }
  }
  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      <div class="renderedData ">{render()}</div>
      <Footer />
    </>
  );
}

export default App;
