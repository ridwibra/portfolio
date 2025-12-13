"use client";

import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="px-10 flex flex-col md:flex-row md:justify-between items-center h-auto md:h-16 py-4 bg-gray-100 dark:bg-gray-900 shadow-inner text-sm text-gray-600 dark:text-gray-400">
      {/* Left side: copyright */}
      <p className="text-center md:text-left mb-2 md:mb-0">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold">Ridwan</span>. All rights reserved.
      </p>

      {/* Right side: contact + social links */}
      <div className="flex items-center gap-4">
        {/* Email */}
        <a
          href="mailto:yourname@example.com"
          className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
        >
          <FaEnvelope size={18} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
        >
          <FaGithub size={18} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
        >
          <FaLinkedin size={18} />
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
        >
          <FaTwitter size={18} />
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent;
