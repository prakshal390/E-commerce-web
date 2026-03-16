// import React, { useState } from 'react'

// const Login = () => {
// const [currentStatus, setCurrentStatus] = useState("register");
//   return (
//     <div className="h-screen bg-zinc-600 flex justify-center items-center">
//       <div className="flex flex-col p-3 gap-3 bg-white rounded shadow-2xl">
//         {currentStatus == "register" ? <h1>Registration</h1> : <h1>Sign In</h1>}
//         {currentStatus == "register" && (
//           <input
//             className="w-full outline-none p-3"
//             type="text"
//             placeholder="Name.."
//           />
//         )}  {/* show only Name input */}


//         <input
//           className="w-full outline-none p-3"
//           type="text"
//           placeholder="Email.."
//         />
//         <input
//           className="w-full outline-none p-3"
//           type="text"
//           placeholder="Password.."
//         />
        

 

//         {/* agar currentStatus -> register hai to hum click karage sign and agar currentStatus -> register nhi hai  to vo definetely signIn hai to hum click karage register par */}
//         {currentStatus == "register" ? (
//           <p
//             className="text-[12px] cursor-pointer text-blue-500 text-center"
//             onClick={() => setCurrentStatus("sign")}>
//             sign  
           
//           </p>

//         ) : (
//           <p
//             onClick={() => setCurrentStatus("register")}
//             className="text-[12px] cursor-pointer text-blue-500 text-center"
//           >
//             register
//           </p>
//         )}




//         {/* Home Button */}
//         <a href="/">
//         <button className="w-full px-3 rounded py-2 bg-blue-400 hover:bg-blue-500 mb-3">
//         Home
//         </button>
//         </a>

//         {/* For Button */}
//         {currentStatus == "register" ? (
//           <button className="w-full px-3 rounded py-2 bg-green-400 hover:bg-green-500">
//             {" "}
//             Register  
//           </button>
//         ) : (
//           <button className="w-full px-3 rounded py-2 bg-green-400 hover:bg-green-500">
//             {" "}
//             SignIn{" "}
//           </button>
//         )}
//       </div>
//     </div>

//     // sign - >email and password
//     // registration -> name + email + password
//   );
// }

// export default Login
























import React, { useState } from "react";

const Login = () => {
  const [currentStatus, setCurrentStatus] = useState("register");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center px-10 lg:px-14 py-12 bg-gradient-to-br from-cyan-500/20 to-blue-700/20 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-5">
            Welcome Back
          </h1>
          <p className="text-sm lg:text-base text-white/80 leading-7">
            Access your account and explore a beautiful shopping experience.
            Register or sign in to continue with your ecommerce journey.
          </p>

          <div className="mt-10 space-y-4">
            <div className="bg-white/10 rounded-xl p-4 border border-white/10">
              <h2 className="font-semibold text-lg">Fast Access</h2>
              <p className="text-sm text-white/70 mt-1">
                Login quickly and securely from any device.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-4 border border-white/10">
              <h2 className="font-semibold text-lg">Responsive Design</h2>
              <p className="text-sm text-white/70 mt-1">
                Smooth experience on desktop, tablet, and mobile.
              </p>
            </div>
          </div>
        </div>






        {/* Right Section */}
        <div className="bg-white px-6 sm:px-8 md:px-10 py-10 sm:py-12">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 text-center">
              {currentStatus === "register" ? "Create Account" : "Welcome Back"}
            </h2>

            <p className="text-sm text-gray-500 text-center mt-2 mb-8">
              {currentStatus === "register"
                ? "Register to start your shopping journey"
                : "Sign in to continue to your account"}
            </p>

            <form className="space-y-5">
              {currentStatus === "register" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>

              {currentStatus !== "register" && (
                <div className="flex justify-end">
                  <p className="text-sm text-blue-600 cursor-pointer hover:underline">
                    Forgot Password?
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3 rounded-xl hover:scale-[1.02] transition duration-300 shadow-lg"
              >
                {currentStatus === "register" ? "Register" : "Sign In"}
              </button>
            </form>

            <div className="mt-4">
              <a href="/">
                <button className="w-full border border-gray-300 text-gray-700 font-medium py-3 rounded-xl hover:bg-gray-100 transition">
                  Go to Home
                </button>
              </a>
            </div>

            <div className="mt-6 text-center">
              {currentStatus === "register" ? (
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <span
                    onClick={() => setCurrentStatus("sign")}
                    className="text-blue-600 font-semibold cursor-pointer hover:underline"
                  >
                    Sign In
                  </span>
                </p>
              ) : (
                <p className="text-sm text-gray-600">
                  Don&apos;t have an account?{" "}
                  <span
                    onClick={() => setCurrentStatus("register")}
                    className="text-blue-600 font-semibold cursor-pointer hover:underline"
                  >
                    Register
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;