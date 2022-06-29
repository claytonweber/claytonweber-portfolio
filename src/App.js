import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
// import { useState } from "react";
// import Nav from "./components/Nav";
import "./App.css";
// import { BrowserRouter, Route, NavLink } from "react-router-dom";

// import About from "./pages/About";
// import Projects from './pages/Projects';
// import Contact from "./pages/Contact";
// import Resume from './pages/Resume';

// export default function App() {
//   const [currentPage, setCurrentPage] = useState('About');
  
  // const renderPage = () => {
  //   if (currentPage === 'About') {
  //     return <About />
  //   }
  //   if (currentPage === 'Projects') {
  //     return <Projects />;
  //   }
  //   if (currentPage === 'Contact') {
  //     return <Contact />;
  //   }
  //   if (currentPage === 'Resume') {
  //     return <Resume />;
  //   }
  // };

  // const handlePageChange = (page) => setCurrentPage(page);

  // return (
  //   <div>
  //     <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
  //     {renderPage()}
  //   </div>
  // );


  const App = () => <PortfolioContainer />;
  export default App;
