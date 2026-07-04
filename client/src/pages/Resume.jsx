import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import {
  uploadResume,
  getResume,
  deleteResume,
} from "../services/resumeService";
import toast from "react-hot-toast";

function Resume() {
  const [resume, setResume] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchResume();
  }, []);

  const fetchResume = async () => {
    try {
      const res = await getResume();
      setResume(res.data.resume || "");
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a PDF");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);

      const res = await uploadResume(formData);

      setResume(res.data.resume);

      toast.success("Resume Uploaded Successfully");
    } catch (error) {
      console.error(error);
      toast.error("Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Delete Resume?"
    );

    if (!confirmDelete) return;

    try {
      await deleteResume();

      setResume("");

      toast.success("Resume Deleted Successfully");
    } catch (error) {
      console.error(error);
      toast.error("Delete Failed");
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-600 mb-8">
          My Resume
        </h1>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-6"
        />

        <button
          onClick={handleUpload}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          {loading ? "Uploading..." : "Upload Resume"}
        </button>

        {resume && (
          <div className="mt-8 border-t pt-6">

            <h2 className="text-xl font-semibold mb-5">
              Resume Uploaded ✅
            </h2>

            <div className="flex flex-wrap gap-4">

              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg"
              >
                View Resume
              </a>

              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
              >
                Download Resume
              </a>

              <button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg"
              >
                Delete Resume
              </button>

            </div>

          </div>
        )}

      </div>
    </DashboardLayout>
  );
}

export default Resume;