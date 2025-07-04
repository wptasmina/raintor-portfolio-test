"use client";


import { Send, Mail, Facebook, Instagram, Twitter } from 'lucide-react';


const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-inter">
      {/* Main card container for the form */}
      <div className="bg-black text-white p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-left text-base font-medium text-gray-300 mb-1">
              Enter your name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-1 text-white placeholder-gray-500 transition-colors duration-300"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block  text-left text-base font-medium text-gray-300 mb-1">
              Your email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-1 text-white placeholder-gray-500 transition-colors duration-300"
            />
          </div>

          {/* Project Description Textarea */}
          <div>
            <label htmlFor="project" className="block  text-left text-base font-medium text-gray-300 mb-1">
              Describe your project
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-1 text-white placeholder-gray-500 transition-colors duration-300"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
            <button
              type="submit"
              className="flex items-center bg-black py-2 rounded-full font-semibold  transition-colors duration-300 shadow w-full sm:w-auto justify-center text-white border"
            >
              <span className="flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-x-1 rounded-full border border-white w-8 h-8">
                <Send className="w-5 h-5" />
              </span>
              <span className="px-5">Send</span>
            </button>
            <span className="text-gray-400">or</span>

             <button
              type="submit"
              className="flex items-center bg-black py-2 rounded-full font-semibold  transition-colors duration-300 shadow w-full sm:w-auto justify-center text-white border"
            >
              <span className="flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-x-1 rounded-full border border-white w-8 h-8">
                <Mail className="w-5 h-5" />
              </span>
              <span className="px-5">Contact Me</span>
            </button>
    
          </div>
        </form>

        {/* Social Media Links */}
        <div className="flex flex-col sm:flex-row items-start justify-start mt-8 pt-6 border-t border-gray-700">
          <span className="text-gray-400 text-base mr-4 mb-2 sm:mb-0">@williamrey</span>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
