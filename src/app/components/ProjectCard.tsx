export default function ProjectCard({ title, description }: { title: string; description: string }) {
    return (
      <div className="border rounded p-4 shadow-md bg-white">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  