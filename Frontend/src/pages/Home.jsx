import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixlib=rb-4.0.3')",
      }}
    >
      {/* Mobile-responsive navigation bar */}
      <nav className="bg-black bg-opacity-50 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo - Always visible and left-aligned */}
          <div className="text-white text-2xl font-bold">
            <span>🚗 RideApp</span>
          </div>

          {/* Hamburger Menu Button - Only visible on mobile */}
          <button 
            className="sm:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Links - Always visible on desktop, toggleable on mobile */}
          <div className={`
            absolute sm:relative top-16 sm:top-0 left-0 sm:left-auto
            w-full sm:w-auto
            bg-black sm:bg-transparent
            ${isMenuOpen ? 'block' : 'hidden'} sm:block
            transition-all duration-300
          `}>
            <div className="flex flex-col sm:flex-row p-4 sm:p-0 space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="/" className="text-white hover:text-gray-300 text-center border-b sm:border-none pb-2 sm:pb-0">Home</a>
              <a href="/login" className="text-white hover:text-gray-300 text-center border-b sm:border-none pb-2 sm:pb-0">Login</a>
              <a href="/signup" className="text-white hover:text-gray-300 text-center">Sign Up</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="min-h-screen bg-black bg-opacity-50 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8 text-center">
          Your Ride, Your Way
        </h1>
        <p className="text-lg sm:text-xl text-white mb-12 text-center max-w-2xl px-4">
          Book a ride with the best captains in town. Safe, reliable and
          affordable transportation at your fingertips.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4">
          <Link to="/user-login" className=" flex justify-center items-center w-full cursor-pointer sm:w-auto bg-white text-black px-25 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Book a Ride
          </Link>
          <Link to="/captain-login" className=" flex justify-center items-center w-full cursor-pointer sm:w-auto bg-transparent border-2 border-white text-white px-20 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300">
            Become a Captain
          </Link>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white text-center px-4">
          <div className="flex flex-col items-center p-4">
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="text-xl font-semibold mb-2">Quick Pickup</h3>
            <p className="text-sm sm:text-base">Get picked up within minutes of booking your ride</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Best Rates</h3>
            <p className="text-sm sm:text-base">Competitive prices and multiple payment options</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold mb-2">Top Rated</h3>
            <p className="text-sm sm:text-base">Experienced and highly rated captains</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
