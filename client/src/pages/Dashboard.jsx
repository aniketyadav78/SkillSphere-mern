import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logged out successfully");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">

        <h1 className="text-3xl font-bold text-blue-600">
          Welcome 👋
        </h1>

        <h2 className="text-2xl mt-5 font-semibold">
          {user?.fullName}
        </h2>

        <p className="text-gray-500 mt-2">
          {user?.email}
        </p>

        <p className="mt-2">
          <strong>Role:</strong> {user?.role}
        </p>

        <p>
          <strong>Phone:</strong> {user?.phone}
        </p>

        <p>
          <strong>Location:</strong> {user?.location}
        </p>

        <button
          onClick={handleLogout}
          className="mt-8 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Dashboard;