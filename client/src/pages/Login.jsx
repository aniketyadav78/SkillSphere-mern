import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center px-4">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">

        <h2 className="text-3xl font-bold text-center text-blue-600">
          Welcome Back 👋
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Login to your SkillSphere account
        </p>

        <form className="mt-8 space-y-5">

          {/* Email */}

          <div>
            <label className="font-medium">Email</label>

            <div className="flex items-center border rounded-lg mt-2 px-3">

              <FaEnvelope className="text-gray-400" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 outline-none"
              />

            </div>
          </div>

          {/* Password */}

          <div>

            <label className="font-medium">
              Password
            </label>

            <div className="flex items-center border rounded-lg mt-2 px-3">

              <FaLock className="text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full p-3 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

          </div>

          {/* Remember */}

          <div className="flex justify-between items-center text-sm">

            <label className="flex gap-2 items-center">

              <input type="checkbox" />

              Remember Me

            </label>

            <Link
              to="#"
              className="text-blue-600"
            >
              Forgot Password?
            </Link>

          </div>

          {/* Button */}

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6">

          Don't have an account?

          <Link
            to="/register"
            className="text-blue-600 font-semibold ml-2"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;