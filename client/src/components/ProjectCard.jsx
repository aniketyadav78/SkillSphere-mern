function ProjectCard({
  project,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">

      {/* Project Image */}
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-lg">
            No Image
          </span>
        </div>
      )}

      <div className="p-5">

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-3 line-clamp-3">
          {project.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.skills?.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-6">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg"
            >
              GitHub
            </a>
          )}

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
            >
              Live Demo
            </a>
          )}

        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">

          <button
            onClick={() => onEdit(project)}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(project._id)}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;