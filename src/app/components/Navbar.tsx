import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 px-10">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <div className="text-xl font-bold">My Website</div>
        </Link>
        {/* The Px at the end of the line below is what pushes margin to the right */}
        <div className="flex space-x-4 px-40">
          <Link href="/projects">
            <div className="hover:text-gray-400">Projects</div>
          </Link>
          <Link href="/notes">
            <div className="hover:text-gray-400 px-4">Notes</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
