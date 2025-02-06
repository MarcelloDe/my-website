"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State for the mobile menu

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const NAV_HEIGHT = 80;

    const options = {
      root: null,
      rootMargin: `-${NAV_HEIGHT}px 0px 0px 0px`,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Smooth scrolling function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Close menu on mobile after clicking
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold">Marcello De Filippis</div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-6">
          {[
            { id: "about", label: "About Me" },
            { id: "experience", label: "Experience" },
            { id: "projects", label: "Projects" },
            { id: "education", label: "Education" },
            { id: "notes", label: "Notes" },
          ].map(({ id, label }) => (
            <Link key={id} href={`#${id}`} scroll={false}>
              <div
                className={`text-lg cursor-pointer transition-colors duration-200 ${
                  activeSection === id
                    ? "text-blue-800 font-bold"
                    : "text-blue-600"
                }`}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </div>
            </Link>
          ))}
        </div>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu (Hidden by Default) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-md`}
      >
        {[
          { id: "about", label: "About Me" },
          { id: "experience", label: "Experience" },
          { id: "projects", label: "Projects" },
          { id: "education", label: "Education" },
          { id: "notes", label: "Notes" },
        ].map(({ id, label }) => (
          <Link key={id} href={`#${id}`} scroll={false}>
            <div
              className="block px-4 py-2 text-lg cursor-pointer hover:bg-gray-200"
              onClick={() => scrollToSection(id)}
            >
              {label}
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
