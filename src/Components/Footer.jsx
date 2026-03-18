import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

function Footer(){
  return(

<footer className="bg-black text-white py-8">

<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

<h2 className="text-xl font-semibold">
Prakshal Jain
</h2>

<div className="flex gap-6 text-xl">

<a href="https://www.instagram.com/Cyberking_840" className="hover:text-pink-500">
<FaInstagram/>
</a>

<a href="https://www.linkedin.com/in/prakshal-jain-0679a4286" className="hover:text-blue-400">
<FaLinkedin/>
</a>

<a href="mailto:jainprakshal@gmail.com" className="hover:text-yellow-400">
<FaEnvelope/>
</a>

{/* ✅ GitHub Added */}
<a href="https://github.com/prakshal390" className="hover:text-gray-400">
<FaGithub/>
</a>

</div>

</div>

<p className="text-center text-gray-400 mt-6 text-sm">
© 2026 Prakshal Jain | All Rights Reserved
</p>

</footer>

  )
}

export default Footer;


