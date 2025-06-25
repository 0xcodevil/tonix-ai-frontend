
import { Link } from "react-router-dom";
import { Gamepad2, Twitter, MessageCircle, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8">
              <img src="/imgs/logo.png" alt="" />
              </div>
              <span className="text-2xl font-space font-bold">TONIXAI</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              The next-generation decentralized platform combining AI-generated multimedia 
              with Telegram-based gamification on the TON blockchain.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-tonix-blue rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-tonix-blue rounded-lg flex items-center justify-center transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-tonix-blue rounded-lg flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-tonix-blue rounded-lg flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-tonix-cyan transition-colors">Home</Link></li>
              <li><Link to="/ai-generation" className="hover:text-tonix-cyan transition-colors">AI Generation</Link></li>
              <li><a href="#" className="hover:text-tonix-cyan transition-colors">Telegram Bot</a></li>
              <li><a href="#" className="hover:text-tonix-cyan transition-colors">NFT Marketplace</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-tonix-cyan transition-colors">Whitepaper</a></li>
              <li><a href="#" className="hover:text-tonix-cyan transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-tonix-cyan transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-tonix-cyan transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 TONIXAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-tonix-cyan text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-tonix-cyan text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-tonix-cyan text-sm transition-colors">Legal Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
