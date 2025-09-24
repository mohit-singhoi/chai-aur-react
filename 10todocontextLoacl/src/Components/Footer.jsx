import React from "react";

function Footer() {
  return (
    <footer className="text-center text-gray-300 mt-6 py-4 border-t border-gray-600 mt-[200px]">
      <p className="text-sm">© {new Date().getFullYear()} Todo App. Built with ❤️ using React.</p>
    </footer>
  );
}

export default Footer;
