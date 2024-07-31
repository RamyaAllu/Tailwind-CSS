import React from 'react';
import { Link } from 'react-router-dom';

const NavBarSection = ({ change }) => {
  return (
    <section>
      <header className="body-font bg-BgColor text-TextColor">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" className="flex title-font font-medium items-center text-TextColor mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Healthy Snacks</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/home" className="mr-5 hover:text-TextColor">Home</Link>
            <Link to="/about" className="mr-5 hover:text-TextColor">About Us</Link>
            <Link to="/snacks" className="mr-5 hover:text-TextColor">Our Snacks</Link>
            <Link to="/contact" className="mr-5 hover:text-TextColor">Contact</Link>
          </nav>
          <button
            className="inline-flex items-center bg-blue-900 text-white text-TextColor border-0 py-1 px-3 focus:outline-none hover:bg-black hover:bg-TextColor rounded text-base mt-4 md:mt-0"
            onClick={change}
          >
            Dark / Light
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </section>
  );
};

export default NavBarSection;
