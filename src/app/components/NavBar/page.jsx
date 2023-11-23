const NavBar = () => {
  return (
    <div className="w-full h-93 flex-shrink-0 flex items-center px-8">
      {/* Div para "jb" */}
      <div className="flex-shrink-0">
        <h1 className="text-black font-dm-sans font-bold text-6xl leading-120 tracking-tight">jb.</h1>
      </div>  

      {/* Div para las navegaciones */}
      <div className="flex-grow h-60 flex items-center space-x-10 justify-end">
        <a href="#" className="text-black font-dm-sans font-semibold text-2xm">WORKS</a>
        <a href="#" className="text-black font-dm-sans font-semibold text-2xm">ABOUT ME</a>
        <a href="#" className="text-black font-dm-sans font-semibold text-2xm">CONTACT</a>
      </div> 
    </div>
  );
};

export default NavBar;
