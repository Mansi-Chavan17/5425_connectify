import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white">

      <div className="absolute inset-0 bg-black opacity-40"></div>


      <div className="relative z-10 text-center p-8">
        <h1 className="text-5xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to Event Connection Platform
        </h1>
        <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Connecting like-minded individuals at your favorite events. Discover, meet, and engage like never before.
        </p>

        <Link to="/register">
          <button
            className="px-8 py-4 bg-pink-600 text-white font-bold rounded-full shadow-xl hover:bg-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            Join Us Now
          </button>
        </Link>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-64 text-white opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        fill="currentColor"
      >
        <path d="M0,224L1440,32L1440,320L0,320Z"></path>
      </svg>
    </div>
  );
};

export default HomePage;
