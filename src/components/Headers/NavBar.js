import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const menuItems = [
    { name: 'TRANG CHỦ', link: '/' },
    { name: 'GIỚI THIỆU', link: 'https://example.com' },
    { name: 'NAM', link: '/men' },
    { name: 'NỮ', link: '/women' },
    { name: 'PHỤ KIỆN', link: 'https://example.com' },
    { name: 'UNISEX', link: 'https://example.com' },
    { name: 'BLOG', link: 'https://example.com' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav className="relative shadow-[0px_0px_5px_rgba(0,0,0,0.1)]">
        {/* Hamburger Icon */}
        <div
          ref={hamburgerRef}
          className="flex md:hidden justify-between items-center px-4 py-0 md:py-3 cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="text-2xl" role="img" aria-label="Menu">&#9776;</span>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed top-0 left-0 h-full w-1/3 bg-white shadow-lg md:hidden transition-transform duration-300 z-50`}
        >
          <div className="flex justify-end p-4">
            <span
              className="text-3xl cursor-pointer text-red-500"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              &times;
            </span>
          </div>
          <ul className="flex flex-col items-center mt-8">
            {menuItems.map((item) => (
              <li key={item.name} className="p-3">
                <Link href={item.link}
                    className="text-gray-800 hover:bg-gray-200 rounded-lg text-[10px] md:text-base font-medium px-4 py-2 xs:whitespace-nowrap"
                    onClick={closeMenu}
                    aria-label={`Go to ${item.name}`}
                  >
                    {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-3 lg:space-x-5 justify-center md:py-3 lg:py-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.link}
                  className="text-gray-800 hover:bg-gray-200 rounded-lg md:text-sm lg:text-base font-medium px-4 py-2"
                  aria-label={`Go to ${item.name}`}
                >
                  {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
