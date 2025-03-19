import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Illustration */}
        <div className="md:w-1/2 lg:w-2/5 text-center md:text-left">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 transform -skew-y-6 sm:skew-y-0 sm:rotate-12 rounded-lg shadow-lg"></div>
            <div className="relative text-blue-500">
              <svg
                className="h-64 w-full mx-auto"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="md:w-1/2 lg:w-3/5 text-center md:text-left">
          <h1 className="text-9xl font-extrabold text-gray-900 mb-4 animate-bounce">
            404
          </h1>
          <p className="text-2xl font-semibold text-gray-800 mb-4">
            Oops! Page not found
          </p>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Button variant="primary">Return Home</Button>
            <Button variant="outline">Contact Support</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
