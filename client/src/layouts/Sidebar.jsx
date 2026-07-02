import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  const menus = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      path: "/dashboard",
    },
    {
      name: "My Profile",
      icon: <FaUser />,
      path: "/profile",
    },
    {
      name: "Projects",
      icon: <FaFolderOpen />,
      path: "/projects",
    },
    {
      name: "Resume",
      icon: <FaFileAlt />,
      path: "/resume",
    },
    {
      name: "Settings",
      icon: <FaCog />,
      path: "/settings",
    },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-10">
        SkillSphere
      </h1>

      <div className="space-y-3">
        {menus.map((menu) => (
          <NavLink
            key={menu.name}
            to={menu.path}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600"
          >
            {menu.icon}
            {menu.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;