import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  addProject,
  updateProject,
} from "../services/projectService";

function AddProjectModal({
  closeModal,
  refreshProjects,
  projectToEdit,
}) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    skills: "",
    github: "",
    liveDemo: "",
    image: "",
  });

  useEffect(() => {
    if (projectToEdit) {
      setFormData({
        title: projectToEdit.title || "",
        description: projectToEdit.description || "",
        skills: projectToEdit.skills
          ? projectToEdit.skills.join(", ")
          : "",
        github: projectToEdit.github || "",
        liveDemo: projectToEdit.liveDemo || "",
        image: projectToEdit.image || "",
      });
    } else {
      setFormData({
        title: "",
        description: "",
        skills: "",
        github: "",
        liveDemo: "",
        image: "",
      });
    }
  }, [projectToEdit]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        ...formData,
        skills: formData.skills
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      };

      if (projectToEdit) {
        await updateProject(projectToEdit._id, payload);
        toast.success("Project Updated Successfully");
      } else {
        await addProject(payload);
        toast.success("Project Added Successfully");
      }

      refreshProjects();
      closeModal();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-xl p-8">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-600">
            {projectToEdit ? "Edit Project" : "Add Project"}
          </h1>

          <button
            onClick={closeModal}
            className="text-3xl font-bold"
          >
            ×
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <textarea
            rows="4"
            name="description"
            placeholder="Project Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="skills"
            placeholder="React, Node.js, MongoDB"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="url"
            name="github"
            placeholder="GitHub URL"
            value={formData.github}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="url"
            name="liveDemo"
            placeholder="Live Demo URL"
            value={formData.liveDemo}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="image"
            placeholder="Project Image URL"
            value={formData.image}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <div className="flex gap-4 pt-3">

            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
            >
              {loading
                ? "Please Wait..."
                : projectToEdit
                ? "Update Project"
                : "Save Project"}
            </button>

            <button
              type="button"
              onClick={closeModal}
              className="flex-1 bg-gray-300 hover:bg-gray-400 py-3 rounded-lg"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default AddProjectModal;