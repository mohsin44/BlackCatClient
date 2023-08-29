import React from "react";

const Logo = ({ isCollapsed }) => {
  return (
    <div className="flex h-12 p-2 hover:bg-slate-100 transition-all duration-300 rounded-md cursor-pointer">
      {/* <img src="src\assets\logo.svg" alt="logo" /> */}
      <img src="public/cat1.png" alt="logo" />
      {!isCollapsed && (
        <div className="flex flex-col justify-center ml-2 text-slate-800">
          <h3 className="text-[24px] font-extralight leading-none tracking-wider">
            Blackcat
          </h3>
          <h5 className="text-[14px] font-extrabold leading-none tracking-widest">
            Services
          </h5>
        </div>
      )}
    </div>
  );
};

export default Logo;
