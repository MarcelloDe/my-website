// export default function Notes() {
//     return (
//       <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
//         <h1 className="text-3xl font-bold text-green-600 mb-4">My Notes</h1>
//         <p className="text-lg text-gray-700">This is where I’ll share my thoughts and notes.</p>
//         {/* Add content or links to notes here */}
//       </div>
//     );
//   }

import ProjectCard from "../components/ProjectCard";

  
  export default function Notes() {
    const notes = [
      { id: 1, title: "React Basics", content: "Learn JSX, components, and props." },
      { id: 2, title: "Next.js Routing", content: "Explore file-based routing and dynamic routes." },
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">My Notes</h1>
        <ul className="space-y-4">
          {notes.map((note) => (
            <ProjectCard key={note.id} title={note.title} description={note.content} />

            
            // <li key={note.id} className="border p-4 rounded shadow bg-white">
            //   <h2 className="text-xl font-bold">{note.title}</h2>
            //   <p className="text-gray-600">{note.content}</p>
            // </li>
          ))}
        </ul>
      </div>
    );
  }
  