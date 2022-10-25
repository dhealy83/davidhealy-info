import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import MyWork from "./components/MyWork";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
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
    } else if (currentPage === "HomePage") {
      return <HomePage />;
    } else if (currentPage === "Resume") {
      return <Resume />;
    }
  }
  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      <div className="renderedData ">{render()}</div>
      <Footer />
    </>
  );
}

export default App;
