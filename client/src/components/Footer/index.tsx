import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">About Us</h3>
            <p className="text-sm">
              Welcome to our vibrant community of thinkers, creators, and
              storytellers! Dive into a world of captivating articles,
              thought-provoking insights, and inspiring narratives.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="hover:text-white transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="hover:text-white transition-colors"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Business Street</li>
              <li>New York, NY 10001</li>
              <li>Email: info@example.com</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Linkedin
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                X
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Create You Blogs. All rights
            reserved.
          </p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
