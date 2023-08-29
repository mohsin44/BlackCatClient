import React from "react";

const MenuItem = ({ isCollapsed, icon, title }) => {
  return (
    <div className="flex p-3 transition-all duration-700 rounded-md cursor-pointer  hover:bg-slate-100 ">
      <img
        src={icon}
        alt="logo"
        className="w-6 h-6 transition-all duration-700"
      />
      {!isCollapsed && (
        <div className="flex flex-col justify-center ml-2 text-slate-800 transition-all duration-700">
          <h4 className="font-bold transition-all duration-700">{title}</h4>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
