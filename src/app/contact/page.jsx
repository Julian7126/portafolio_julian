import React from 'react'

const Contact = () => {
  return (
    <div>Contact</div>
  )
}

export default Contact




// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// // import nodemailer from "nodemailer";

// const Contact = () => {


//   return (
//     <div className="flex justify-center items-center h-screen">
//       <motion.form
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -50 }}
//         transition={{ duration: 0.5 }}
//         className="flex flex-wrap bg-gradient-to-br from-gray-200 to-gray-100 p-8 rounded-lg shadow-md"
//         onSubmit={handleSubmit}
//       >
//         <div className="w-full md:w-1/2 px-4 mb-4">
//           <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
//             Nombre o Compañía
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
//             required
//           />
//         </div>

//         <div className="w-full md:w-1/2 px-4 mb-4">
//           <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
//             required
//           />
//         </div>

//         <div className="w-full md:w-1/2 px-4 mb-4">
//           <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
//             Teléfono
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
//           />
//         </div>

//         <div className="w-full px-4 mb-4">
//           <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
//             Mensaje
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
//             rows="4"
//             required
//           ></textarea>
//         </div>

//         <div className="w-full text-center">
//           <motion.button
//             type="submit"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition"
//           >
//             Enviar
//           </motion.button>
//         </div>
//       </motion.form>
//     </div>
//   );
// };

// export default Contact;
