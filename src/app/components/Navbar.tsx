import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <div className="text-xl font-bold">My Website</div>
        </Link>
        <div className="space-x-4">
          <Link href="/projects">
            <div className="hover:text-gray-400">Projects</div>
          </Link>
          <Link href="/notes">
            <div className="hover:text-gray-400">Notes</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
