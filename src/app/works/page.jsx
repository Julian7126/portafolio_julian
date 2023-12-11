import Proyectos from "@/components/Proyectos";


async function loadProyects() {
  const response = await fetch("http://localhost:3000/api/proyects");
  const datanew = await response.json();
  console.log(datanew);
  return datanew;
}

const Work = async () => {
  const works = await loadProyects();
  return (
    <div className="container mx-auto px-4 h-[2000px]">
      <div className="my-16 m-0 h-1">
        <h1 className="text-2xl text-left ">
          A little bit about my projects
        </h1>
      </div>

      {works.map((work) => (
        <Proyectos key={work.id} work={work} />
      ))}
    </div>
  );
};

export default Work;
