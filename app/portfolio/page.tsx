import projects from "@/app/data/portfolio";

export default function PortfolioPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">My Portfolio Timeline</h1>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
            {/* Container untuk gambar dengan frame simetris */}
            <div className="flex justify-center items-center mb-4">
              <div className="w-40 h-40 overflow-hidden rounded-md border-2 border-gray-600">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
                />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-center">{project.title}</h2>
            <p className="text-gray-400 text-center">{project.year}</p>
            <p className="mt-2 text-center">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-400 mt-2 inline-block hover:underline text-center"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
