import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import AddProjectModal from "../components/AddProjectModal";
import ProjectCard from "../components/ProjectCard";
import {
  getProjects,
  deleteProject,
} from "../services/projectService";
import toast from "react-hot-toast";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await getProjects();

      setProjects(res.data.projects);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProject(id);

      toast.success("Project Deleted Successfully");

      fetchProjects();
    } catch (error) {
      console.error(error);
      toast.error("Delete Failed");
    }
  };

  const handleEdit = (project) => {
    setProjectToEdit(project);
    setShowModal(true);
  };

  const handleAdd = () => {
    setProjectToEdit(null);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setProjectToEdit(null);
  };

  if (loading) {
    return (
      <DashboardLayout>
        <h1 className="text-2xl font-bold">
          Loading...
        </h1>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          My Projects
        </h1>

        <button
          onClick={handleAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          + Add Project
        </button>

      </div>
            {projects.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-10 text-center">
          <h2 className="text-2xl font-bold">
            No Projects Found
          </h2>

          <p className="text-gray-500 mt-2">
            Click on <strong>Add Project</strong> to create your first project.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}

        </div>
      )}

      {showModal && (
        <AddProjectModal
          closeModal={closeModal}
          refreshProjects={fetchProjects}
          projectToEdit={projectToEdit}
        />
      )}

    </DashboardLayout>
  );
}

export default Projects;