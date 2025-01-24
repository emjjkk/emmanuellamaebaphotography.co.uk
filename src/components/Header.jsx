import { useState } from 'react';

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="w-screen md:w-full px-4 md:px-24 py-2 flex justify-between items-center fixed bg-white z-[999] shadow-sm">
        <div className="items-center md:w-[100px]">
          <i
            className="fa-solid fa-bars cursor-pointer text-lg"
            onClick={toggleSidebar}
          ></i>
        </div>
        <div className="items-center">
          <a href="/" className=""> <img
            src="/logo-default-176x28.png"
            className="w-[150px] md:w-[200px] h-auto"
            alt="emmanuellamaebaphoto"
          /></a>
        </div>
        <div className="items-center md:w-[100px]">
          <a href="/contacts">
            <button className="hover:bg-purple-900 px-2 py-1 bg-purple-700 rounded-sm text-white text-sm">
              Contact Me
            </button>
          </a>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 z-[9998] shadow-lg`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <i
            className="fa-solid fa-times cursor-pointer text-xl"
            onClick={toggleSidebar}
          ></i>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            <a href="/"><li className="hover:text-gray-800 cursor-pointer py-1">Home</li></a>
            <a href="/about-me"><li className="hover:text-gray-800 cursor-pointer py-1">About Me</li></a>
            <li className="hover:text-gray-800 cursor-pointer relative py-1">
              <span
                onClick={toggleDropdown}
                className="flex justify-between items-center cursor-pointer"
              >
                My Work
                <i
                  className={`fa-solid ${isDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'
                    } ml-2`}
                ></i>
              </span>
              {isDropdownOpen && (
                <ul className="mt-2 w-full py-2 pl-4 border-l border-slate-500 space-y-4">
                  <a href="/work/artists"><li className="hover:text-gray-800 cursor-pointer py-1">Artists</li></a>
                  <a href="/work/bts"><li className="hover:text-gray-800 cursor-pointer py-1">Behind the Scenes</li></a>
                  <a href="/work/dance"><li className="hover:text-gray-800 cursor-pointer py-1">Dance</li></a>
                  <a href="/work/portraits"><li className="hover:text-gray-800 cursor-pointer py-1">Portraits</li></a>
                  <a href="/work/stilllife"><li className="hover:text-gray-800 cursor-pointer py-1">Still Life</li></a>
                  <a href="/work/ps"><li className="hover:text-gray-800 cursor-pointer py-1">Production Stills</li></a>
                  <a href="/work/other"><li className="hover:text-gray-800 cursor-pointer py-1">Other Photography</li></a>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>

      {/* Backdrop for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-[9997]"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
