import ProjectCard from "../components/ProjectCard";


export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">My Projects</h1>
      <div className="space-y-4">
        <ProjectCard
          title="Project 1"
          description="This is a description of my first project."
        />
        <ProjectCard
          title="Project 2"
          description="This is a description of my second project."
        />
        <ProjectCard
          title="Project 3"
          description="This is a description of my third project."
        />
      </div>
    </div>
  );
}