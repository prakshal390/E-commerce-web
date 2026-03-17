// function AboutCom(){
//     return(
//         <div className="h-[77vh] bg-orange-500 text-center  pt-16 text-white">
//         <h1> Hii, MY Name Is Prakshal Jain</h1>
//         </div>
//     )
// }



// export default AboutCom







import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import myImage from "../assets/3.jpeg";

function AboutCom() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 text-white flex flex-col">
      
      

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex-1 flex items-center justify-center px-4 py-10">
        
        {/* CARD */}
        <div className="bg-white text-black rounded-2xl shadow-xl p-6 md:p-10 max-w-2xl w-full text-center">
          
          {/* PROFILE IMAGE */}
          <div className="flex justify-center mb-4">
            <img
              src={myImage}
              alt="profile"
              className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-orange-500 object-cover"
            />
          </div>

          {/* NAME */}
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Hi, I'm Prakshal Jain 👋
          </h1>

          {/* SHORT BIO */}
          <p className="text-gray-600 text-sm md:text-base mb-4">
            I am a passionate developer who loves building modern web applications
            using React, Tailwind CSS, and MERN stack.
          </p>

          {/* EXTRA INFO */}
          <div className="space-y-2 text-sm md:text-base">
            <p>
              🎯 <b>Goal:</b> Become a Full Stack Developer
            </p>
            <p>
              💻 <b>Skills:</b> React, JavaScript, Node.js
            </p>
            <p>
              🚀 <b>Learning:</b> Advanced React & System Design
            </p>
          </div>

          {/* BUTTON */}
          <div className="mt-6">
            <a
              href="/contact"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Contact Me
            </a>
          </div>

        </div>
      </div>

      
    </div>
  );
}

export default AboutCom;