"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// "use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  console.log("🚀 ~ Navbar ~ activeSection:", activeSection);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const NAV_HEIGHT = 80;

    const options = {
      root: null,
      // we're going to use the nav height to scroll a little higher than the actual location because of the padding and top nav height
      rootMargin: `-${NAV_HEIGHT}px 0px 0px 0px`,
      threshold: 0.9, // Trigger when 90% of the section is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          window.scrollTo({
            top: entry.boundingClientRect.top + window.scrollY - NAV_HEIGHT,
            behavior: "smooth",
          });
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <nav className="flex items-center justify-between p-4">
        <div className="text-xl font-bold">Marcello De Filippis</div>
        <div className="flex space-x-4">
          {[
            { id: "about", label: "About Me" },
            { id: "experience", label: "Experience" },
            { id: "projects", label: "Projects" },
            { id: "education", label: "Education" },
            { id: "notes", label: "Notes" },
          ].map(({ id, label }) => (
            <Link key={id} href={`#${id}`}>
              <div
                className={`text-lg transition-colors duration-200 ${
                  activeSection === id
                    ? "text-blue-800 font-bold"
                    : "text-blue-600"
                }`}
              >
                {label}
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

// export default Navbar;

// const Navbar = () => {
//   // We can't do this in Next.js because the DOM is not available at build time
//   // const aboutSection = document.getElementById("about");
//   // // if about is in view console log "in view"
//   // if (aboutSection) {
//   //   console.log("in view");
//   // }

//   // So we actually have to use the useEffect hook to do this

//   // A useEffect react hook is a function that is used to detect changes to the variables that are stored in the dependency array
//   useEffect(() => {
//     const aboutSection = document.getElementById("about");
//     const projectsSection = document.getElementById("projects");
//     const experienceSection = document.getElementById("experience");
//     const educationSection = document.getElementById("education");
//     const notesSection = document.getElementById("notes");

//     // we want to check which section is at the very top of the screen as the user scrolls

//     // for now, let's just console log the section that is at the top of the screen
//     const handleScroll = () => {
//       if (aboutSection) {
//         console.log("About is in view");
//       }
//       if (projectsSection) {
//         console.log("Projects is in view");
//       }
//       if (experienceSection) {
//         console.log("Experience is in view");
//       }
//       if (educationSection) {
//         console.log("Education is in view");
//       }
//       if (notesSection) {
//         console.log("Notes is in view");
//       }
//     };

//     // we want to add an event listener to the window object
//     window.addEventListener("scroll", handleScroll);

//     // If the dependency array is empty, the useEffect hook will only run once
//   }, []);

//   return (
//     <header className="sticky top-0 z-10 bg-white shadow-md">
//       <nav className="flex items-center justify-between p-4">
//         <div className="text-xl font-bold">Marcello De Filippis</div>
//         <div className="flex space-x-4">
//           <Link href="#about">
//             <div className="text-lg text-blue-600">About Me</div>
//           </Link>
//           <Link href="#projects">
//             <div className="text-lg text-blue-600">Projects</div>
//           </Link>
//           <Link href="#experience">
//             <div className="text-lg text-blue-600">Experience</div>
//           </Link>
//           <Link href="#education">
//             <div className="text-lg text-blue-600">Education</div>
//           </Link>
//           <Link href="#notes">
//             <div className="text-lg text-blue-600">Notes</div>
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="bg-gray-800 text-white py-4 px-10">
//       <div className="container mx-auto flex justify-between">
//         <Link href="/">
//           <div className="text-xl font-bold">My Website</div>
//         </Link>
//         {/* The Px at the end of the line below is what pushes margin to the right */}
//         <div className="flex space-x-4 px-40">
//           <Link href="/projects">
//             <div className="hover:text-gray-400">Projects</div>
//           </Link>
//           <Link href="/notes">
//             <div className="hover:text-gray-400 px-4">Notes</div>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
