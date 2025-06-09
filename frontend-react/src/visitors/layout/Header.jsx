import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Header = (profile) => {
  return (
    <nav className="bg-blue-500 dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
      <div className="max-w-1790 flex items-center justify-between ml-4 p-4">
        {/* Left side: Logo */}
        <a href="/login" className="flex items-center">
          <img src="./static/logo.png" className="h-8" alt="PSS BANK Logo" />
          <span className="ml-2 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {/* Optional logo text */}
          </span>
        </a>

        {/* Right side: Links and Login/Google Button */}
        <div className="flex items-center ml-auto space-x-8">
          <div className="hidden md:flex space-x-8">
            <Link
              to="#"
              className="text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-700 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="#"
              className="text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-700 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="#"
              className="text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-700 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </Link>
            <Link
              to="#"
              className="text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-700 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              to="/dashboard"
              className="text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-700 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </Link>
          </div>

          {/* Login/Google Button */}
          <Link to="http://localhost:8000/oauth2/authorization/google">
            <button
              type="button"
              className="flex items-center text-[#777777] font-bold bg-gray-100 hover:bg-white-100 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-sm px-6 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {/* Google Logo */}
              <FcGoogle size={20} className="mr-2" title="Google Logo" />
              {/* Text for Sign In */}
              <span>Sign in</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Header;
