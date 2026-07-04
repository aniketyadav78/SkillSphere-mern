import DashboardLayout from "../layouts/DashboardLayout";
import StatsCard from "../common/StatsCard";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const calculateProfileCompletion = () => {
    const fields = [
      user?.fullName,
      user?.email,
      user?.phone,
      user?.location,
      user?.profileImage,
    ];

    const completed = fields.filter(
      (field) => field && field !== ""
    ).length;

    return Math.round((completed / fields.length) * 100);
  };

  const profileCompletion = calculateProfileCompletion();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <DashboardLayout>
      {/* Welcome Card */}

      <div className="bg-white shadow-xl rounded-2xl p-8 text-center">

        <img
          src={
            user?.profileImage ||
            "https://via.placeholder.com/120"
          }
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 mx-auto mb-5"
        />

        <h1 className="text-3xl font-bold text-blue-600">
          Welcome Back 👋
        </h1>

        <h2 className="text-2xl mt-4 font-semibold">
          {user?.fullName}
        </h2>

        <p className="text-gray-500 mt-2">
          {user?.email}
        </p>

        <div className="mt-4 space-y-2 text-gray-700">

          <p>
            <strong>Role:</strong> {user?.role}
          </p>

          <p>
            <strong>Phone:</strong> {user?.phone}
          </p>

          <p>
            <strong>Location:</strong> {user?.location}
          </p>

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">

        <StatsCard
          title="Projects"
          value="0"
          color="text-blue-600"
        />

        <StatsCard
          title="Jobs Applied"
          value="0"
          color="text-green-600"
        />

       <StatsCard
  title="Resume"
  value={user?.resume ? "Uploaded" : "Not Uploaded"}
  color={user?.resume ? "text-green-600" : "text-red-500"}
/>

        <StatsCard
          title="Profile"
          value={`${profileCompletion}%`}
          color={
            profileCompletion === 100
              ? "text-green-600"
              : "text-orange-500"
          }
        />

      </div>

      {/* Buttons */}

      <div className="flex flex-wrap gap-4 mt-8">

        <button
          onClick={() => navigate("/profile")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          My Profile
        </button>
        <button
          onClick={() => navigate("/projects")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          My Projects
        </button>

        <button
          onClick={() => navigate("/resume")}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
        >
          My Resume
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Logout
        </button>

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;