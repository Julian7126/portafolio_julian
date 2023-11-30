"use client";
import {motion} from "framer-motion";
import Link from "next/link";

const Social = () => {
  const SocialImg = [
    { id: 1, src: "./LINKEDIN.svg",link:"https://linkedin.com/in/julianbischoff" },
    { id: 2, src: "./githubb.svg" ,link: "https://github.com/Julian7126"},
    { id: 3, src: "./WHATSAPP.svg", link:"https://wa.link/0k2wek" },
    { id: 4, src: "./Instagram.svg", link:"https://www.instagram.com/julianbischoff_/?next=%2F" },
    { id: 5, src: "./EMAIL.svg", link:"https://www.google.com/" },
  ];

  return (
    <>
       
      <br className="p-9" />
      <h2 className="text-center mb-4 text-3xl p-1 sm:text-4xl md:text-5xl lg:text-4xl font-bold text-purple-700 m-8">
        Explore My Social Media
      </h2>
      <p className="text-center text-lg text-gray-700">
        Connect with me on various platforms and stay updated!
      </p>
      <motion.div className="flex w-full h-40 justify-center items-center mx-auto">
        {SocialImg.map((item) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 2 }}
            key={item.id}
            className="w-full h-30"
          >
            <Link href={item.link}>
              
                <img
                  src={item.src}
                  alt={`Social ${item.id}`}
                  className="w-full max-w-60 h-20"
                />
              
            </Link>
          </motion.div>
        ))}
      </motion.div>
      <div className="bg-purple-300 h-1 mt-6" />
    </>
  );
};


export default Social;
