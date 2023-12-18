"use client"

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner'
import dotenv from 'dotenv'


dotenv.config()



const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_89s439s', 'template_kcozm9b', form.current, 'pYgGfqlNJz6gYsyun')
      .then((result) => {
        console.log(result.text);
        toast.success("Email sended!")
       
      })
      .catch((error) => {
        toast.error("Error sending email")
      });
  };

  return (
    <>
        <Toaster/>
    <div className="flex justify-center items-center h-screen">
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap bg-gradient-to-br from-gray-200 to-gray-100 p-8 rounded-lg shadow-md"
        onSubmit={sendEmail}
        ref={form}
      >
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label htmlFor="user_name" className="block text-gray-700 font-bold mb-2">
            Nombre o Compañía
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
            required
          />
        </div>

        <div className="w-full md:w-1/2 px-4 mb-4">
          <label htmlFor="user_email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
            required
          />
        </div>

        <div className="w-full px-4 mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="w-full text-center">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition"
    
          >
            Enviar
          </motion.button>
        </div>
      </motion.form>
    </div>
    </>
  );
};

export default Contact;
