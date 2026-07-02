import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  getProfile,
  updateProfile,
  uploadProfileImage,
} from "../services/authService";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
    skills: "",
    experience: "",
    education: "",
    github: "",
    linkedin: "",
    profileImage: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await getProfile();

      const user = res.data.user;

      setFormData({
        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.phone || "",
        location: user.location || "",
        bio: user.bio || "",
        skills: user.skills?.join(", ") || "",
        experience: user.experience || "",
        education: user.education || "",
        github: user.github || "",
        linkedin: user.linkedin || "",
        profileImage: user.profileImage || "",
      });
    } catch (error) {
      toast.error("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleImageUpload = async () => {
    if (!selectedImage) {
      return toast.error("Please select an image");
    }

    try {
      const data = new FormData();

      data.append("image", selectedImage);

      const res = await uploadProfileImage(data);

      toast.success(res.data.message);

      const currentUser = JSON.parse(localStorage.getItem("user"));

      currentUser.profileImage = res.data.image;

      localStorage.setItem("user", JSON.stringify(currentUser));

      fetchProfile();

      setPreview("");
      setSelectedImage(null);

    } catch (error) {
      console.error(error);
      toast.error("Image Upload Failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      await updateProfile({
        ...formData,
        skills: formData.skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
      });

      toast.success("Profile Updated Successfully");

      fetchProfile();

    } catch (error) {
      console.error(error);
      toast.error("Update Failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <h1 className="text-center mt-20 text-2xl">
        Loading...
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          My Profile
        </h1>

        {/* Profile Image */}

        <div className="flex flex-col items-center mb-8">

          <img
            src={
              preview ||
              formData.profileImage ||
              "https://via.placeholder.com/150"
            }
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-4 border-blue-500"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-4"
          />

          <button
            type="button"
            onClick={handleImageUpload}
            className="mt-3 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
          >
            Upload Image
          </button>

        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border rounded-lg p-3"
          />

          <input
            value={formData.email}
            disabled
            className="w-full border rounded-lg p-3 bg-gray-100"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border rounded-lg p-3"
          />

          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border rounded-lg p-3"
          />

          <textarea
            rows="3"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Bio"
            className="w-full border rounded-lg p-3"
          />

          <input
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Java, React, Node.js"
            className="w-full border rounded-lg p-3"
          />

          <input
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Experience"
            className="w-full border rounded-lg p-3"
          />

          <input
            name="education"
            value={formData.education}
            onChange={handleChange}
            placeholder="Education"
            className="w-full border rounded-lg p-3"
          />

          <input
            name="github"
            value={formData.github}
            onChange={handleChange}
            placeholder="GitHub URL"
            className="w-full border rounded-lg p-3"
          />

          <input
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn URL"
            className="w-full border rounded-lg p-3"
          />

          <button
            type="submit"
            disabled={saving}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default Profile;