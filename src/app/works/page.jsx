import Proyectos from "@/components/Proyectos";

const datanew = [
  {
    id: 1,
    name: 'FS GRUPO CONTRUCTOR',
    description: 'The main objective is to provide an online platform where the company can showcase its services and projects in a professional and effective way.',
    status: 'Completed',
    coverImage: '/fsgruposcreen.png',
    button: "Web",
    images: ["/fsgrupocontructor/1.jpg", "/fsgrupocontructor/2.jpg", "/fsgrupocontructor/3.jpg", "/fsgrupocontructor/4.jpg", "/fsgrupocontructor/5.jpg"],
    url: "https://www.fsgrupoconstructor.com/"
  },
  {
    id: 2,
    name: 'API BACK PHONES',
    description: 'This project is an e-commerce API with authentication, chat and shopping cart functionalities.',
    status: 'Completed',
    coverImage: '/apiphones.jpg',
    button: "Web",
    images: [],
    url: "https://back-end-production-4e54.up.railway.app/"
  },
  {
    id: 3,
    name: 'API FRONT RICK AND MORTY',
    description: 'The app, built with React, allows you to explore detailed information about Rick and Morty characters, episodes and locations in an interactive and visually appealing way.',
    status: 'Completed',
    coverImage: '/apirick.jpg',
    button: "Code",
    images: [],
    url: "https://github.com/Julian7126/Ricky-y-Morty-Ecommerce-/tree/master/heroes"
  },
  {
    id: 4,
    name: 'SHOPIFY APP CERVOSTYLE',
    description: 'Custom Shopify app. Designed for a fashion brand currently prominent on the scene, this app offers an online shopping experience that reflects the unique and modern essence of the brand.',
    status: 'Live',
    coverImage: '/cervoprincipal.jpg',
    button: "Web",
    images: [],
    url: "https://cervostyle.com/"
  },
];

const Work = () => {
  return (
    <div className="container mx-auto px-4 h-[2000px]">
    <div className="my-16 m-0 h-1">
      <h1 className="text-2xl text-left ">
        A little bit about my projects
      </h1>
    </div>

    {datanew.map((work) => (
      <Proyectos key={work.id} work={work} />
    ))}
  </div>
  );
};

export default Work;
