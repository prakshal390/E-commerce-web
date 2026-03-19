import React, { useState } from "react";
import ProductAdded from "./ProductAdded";

const AdminLogin = () => {
  // input fields ke liye state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // login success check karne ke liye
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // error ya success message show karne ke liye
  const [message, setMessage] = useState("");

  // fixed admin credentials
  const adminEmail = "jainprakshal29@gmail.com";
  const adminPassword = "Sunny@8171782872";

  // form submit function
  const handleLogin = (e) => {
    e.preventDefault();

    // check email and password
    if (email === adminEmail && password === adminPassword) {
      alert("Admin login successfully");        
      setMessage("Admin login successfully");
      setIsLoggedIn(true);
    } else {
      setMessage("Invalid email or password");
    }
  };

  // agar login successful ho gaya to ProductAdded page show karo
  if (isLoggedIn) {
    return <ProductAdded />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-zinc-800 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-zinc-800 mb-2">
          Admin Panel
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Login to access product page
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Message */}
          {message && (
            <p
              className={`text-sm font-medium text-center ${
                message === "Admin login successfully"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-zinc-800 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;