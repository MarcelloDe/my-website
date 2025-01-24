import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Welcome to My Website
      </h1>
      <div className="space-y-4">
        <Link href="/projects">
          <div className="text-lg text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
            
            My Projects
            </div>
         
        </Link>
        <Link href="/notes">
          <div className="text-lg text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600">
           
            My Notes
            </div>
        </Link>
      </div>
    </div>
  );
}
