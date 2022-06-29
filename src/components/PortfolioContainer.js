import React from 'react';
import { useState } from 'react';

//make sure nav is imported above others?
import Nav from './Nav';
import About from "./pages/About";
import Projects from './pages/Projects';
import Contact from "./pages/Contact";
import Resume from './pages/Resume';

import Footer from './Footer';



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');
  
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
};
