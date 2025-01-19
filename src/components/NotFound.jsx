import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white/90 backdrop-blur-sm p-8 text-center space-y-6 rounded-xl shadow-lg">
        <div className="space-y-4">
          <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            404
          </h1>
          
          <h2 className="text-3xl font-bold text-gray-900">
            No Match Found!
          </h2>
          
          <p className="text-gray-600 text-lg">
            Looks like this page ghosted you! Don&rsquo;t worry, let&rsquo;s get you back to finding your perfect match.
          </p>
          
          <div className="pt-4">
            <Link 
              to="/"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
            >
              <AiOutlineHome className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          Don&rsquo;t give up! Your perfect page match is still out there.
        </div>
      </div>
    </div>
  );
};

export default NotFound;