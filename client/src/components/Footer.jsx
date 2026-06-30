import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-blue-500">
              SkillSphere
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              SkillSphere is a modern freelance marketplace where
              businesses connect with talented freelancers quickly,
              securely and efficiently.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <Link to="/">Home</Link>

              <Link to="/login">Login</Link>

              <Link to="/register">Register</Link>

            </div>

          </div>

          {/* Categories */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Categories
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <p>Web Development</p>

              <p>Graphic Design</p>

              <p>Video Editing</p>

              <p>Digital Marketing</p>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Connect With Us
            </h3>

            <div className="flex gap-5 text-2xl">

              <FaFacebook className="hover:text-blue-500 cursor-pointer transition"/>

              <FaInstagram className="hover:text-pink-500 cursor-pointer transition"/>

              <FaLinkedin className="hover:text-blue-400 cursor-pointer transition"/>

              <FaGithub className="hover:text-gray-300 cursor-pointer transition"/>

            </div>

          </div>

        </div>

        <hr className="border-gray-700 my-10"/>

        <div className="text-center text-gray-400">

          © 2026 SkillSphere. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;