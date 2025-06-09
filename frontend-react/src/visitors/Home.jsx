import React, { useState, useEffect } from "react";
import './home.css'; // Importing the CSS file for the animation

const Home = () => {
  const [secureText, setSecureText] = useState("Secure");
  const [animateKey, setAnimateKey] = useState(0); // Key to trigger animation

  useEffect(() => {
    const interval = setInterval(() => {
      setSecureText((prevText) =>
        prevText === "Instant" ? "Secure" : prevText === "Secure" ? "Simple" : "Instant"
      );
      setAnimateKey((prevKey) => prevKey + 1); // Update key to re-trigger animation
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="bg-blue-70">
      <div className="flex justify-start space-x-5">
        {/* Card-styled container for the text slideshow */}
        <div className="mt-7 ml-[-70px] w-[300px]">
        <div className="bg-[#f2f5fa] rounded-lg p-0">
  <div className="rounded-lg overflow-hidden">
    {/* First Text "Your Transactions" */}
    <div className="relative w-[400px] h-[100px] flex items-center justify-center">
      <h1 className="text-5xl font-bold text-black-450" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Your Transactions
      </h1>
    </div>
  </div>
</div>


          {/* Second Text (animated) */}
          <div className="bg-[#f2f5fa] rounded-lg p-0 mt-0">
            <div className="rounded-lg overflow-hidden">
              <div key={animateKey} className="relative w-[300px] h-[50px] flex items-center justify-center rise-up">
                <h1 className="text-4xl font-bold text-gray-900 animated-text">
                  {secureText}
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 p-6">
          <a href="#">
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <span className="relative inline-block group">
                Welcome to PSS BANK
                <span className="block h-1 bg-customBlue transition-all duration-500 ease-in-out scale-x-0 group-hover:scale-x-100 origin-left"></span>
              </span>
            </h1>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Your Trusted Partner in Financial Success. At <b>PSS BANK</b>, we believe in making banking simple, secure, and accessible for everyone. Whether you are managing your day-to-day finances, planning for the future, or seeking investment opportunities, we're here to help you every step of the way.
          </p>

          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <span className="relative inline-block group">
              Our Services
              <span className="block h-1 bg-customBlue transition-all duration-500 ease-in-out scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </span>
          </h1>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Comprehensive Solutions for Every Need. Personal Banking: Manage your finances with ease, access savings and checking accounts, and explore a variety of personal loans. Business Banking: Tailored solutions for businesses of all sizes. From corporate accounts to business loans, we've got you covered. Investments: Grow your wealth with our expert financial advice and wide range of investment products. Loans and Mortgages: Competitive rates and flexible terms to help you achieve your dreams, whether it's buying a home, car, or funding your education.
          </p>

          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <span className="relative inline-block group">
              Why Choose PSS BANK?
              <span className="block h-1 bg-customBlue transition-all duration-500 ease-in-out scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </span>
          </h1>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Secure & Reliable: Your safety is our top priority. With advanced encryption and fraud protection, your money is always secure. 24/7 Support: We are here to assist you anytime, anywhere. Our customer support team is always ready to help. User-Friendly Platform: Manage your accounts, pay bills, and transfer money seamlessly with our intuitive online banking platform. Community Focused: We believe in giving back. Our community programs and sustainable practices make a positive impact where it matters most.
          </p>

          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <span className="relative inline-block group">
              Join Us Today
              <span className="block h-1 bg-customBlue transition-all duration-500 ease-in-out scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </span>
          </h1>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Banking Made Simple, Secure, and Personal. Open an account in minutes and experience the convenience of modern banking with [ PSS BANK ]. Your financial future starts here.
          </p>

          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-customBlue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
