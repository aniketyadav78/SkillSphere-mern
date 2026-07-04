import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">

      <h1 className="text-2xl font-bold text-blue-600">
        SkillSphere
      </h1>

      <div className="flex items-center gap-4">

        <FaBell className="text-2xl text-gray-600 cursor-pointer" />

        <div className="flex items-center gap-2">

          <img
            src={
              user?.profileImage ||
              "https://via.placeholder.com/50"
            }
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
          />
          
          <div>
            <p className="font-semibold">
              {user?.fullName}
            </p>

            <p className="text-sm text-gray-500">
              {user?.role}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Navbar;