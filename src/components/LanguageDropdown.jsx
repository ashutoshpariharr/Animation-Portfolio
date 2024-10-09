import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx"; // For conditional class management
import { languages } from "../constants";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false); // Close dropdown on selection
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          className="inline-flex justify-between w-30 rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 focus:outline-none"
          onClick={toggleDropdown}
        >
          {selectedLanguage}
          <svg
            className={clsx(
              "w-5 h-5 ml-2 transition-transform",
              isOpen ? "rotate-180" : "rotate-0"
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Animated dropdown */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="absolute mt-2 w-30 rounded-md bg-white shadow-lg overflow-hidden"
      >
        {languages.map((language, index) => (
          <button
            key={index}
            onClick={() => selectLanguage(language)}
            className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
          >
            {language}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default LanguageDropdown;
