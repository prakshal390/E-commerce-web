// import React from 'react'
// import Header from './Header'
// import Footer from './Footer'

// const Contact = () => {
//   return (
//     <div className="bg-zinc-700">
//             <Header/>
//            <div className="h-[77vh] bg-pink-500 text-center  pt-16 text-white" > <h1 >Hello, MY Contact Number :- <b>8171782872</b> <br/>
//            MY Email :- <a href="mailto:jainprakshal@gmail.com" className='text-yellow-500'> <b>jainprakshal@gmail.com</b>  </a>
           
//            </h1>  </div>
//             <Footer/>

//         </div>
//   )
// }

// export default Contact






import React, { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const Contact = () => {
  // map reference
  const mapRef = useRef();

  // Ambehta Peer location (approx)
  const position = [29.8705, 77.3380];

  // zoom in function
  const zoomIn = () => {
    mapRef.current.setZoom(mapRef.current.getZoom() + 1);
  };

  // zoom out function
  const zoomOut = () => {
    mapRef.current.setZoom(mapRef.current.getZoom() - 1);
  };

  return (
    <div className="bg-zinc-900 text-white min-h-screen flex flex-col">
      <Header />


      <div className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">


        {/* ================= HEADING ================= */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Contact Us 📞
        </h1>


        {/* ================= CONTACT INFO ================= */}
        <div className="bg-zinc-800 rounded-xl p-6 shadow mb-8 text-center">
          <p className="text-lg">
            📱 Phone: <b className="text-yellow-400">8171782872</b>
          </p>


          <p className="text-lg mt-2">
            📧 Email:{" "}
            <a
              href="mailto:jainprakshal@gmail.com"
              className="text-yellow-400 font-semibold"
            >
              jainprakshal@gmail.com
            </a>
          </p>


          <p className="text-lg mt-2">
            📍 Location: <b>Ambehta Peer</b>
          </p>
        </div>



        {/* ================= MAP ================= */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">

          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={true}
            className="h-[300px] md:h-[400px] w-full"
            whenCreated={(mapInstance) => {
              mapRef.current = mapInstance;
            }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
              <Popup>📍 Ambehta Peer</Popup>
            </Marker>
          </MapContainer>



          {/* ================= CUSTOM ZOOM BUTTONS ================= */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button
              onClick={zoomIn}
              className="bg-black text-white w-10 h-10 rounded-lg shadow hover:bg-gray-800 text-xl"
            >
              +
            </button>

            <button
              onClick={zoomOut}
              className="bg-black text-white w-10 h-10 rounded-lg shadow hover:bg-gray-800 text-xl"
            >
              -
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;