import React from "react";

const ProfileItem = ({ isCollapsed, profileImage, name }) => {
  return (
    <div className="flex p-1 transition-all duration-300 rounded-md cursor-pointer my-4 hover:bg-slate-100 ">
      <img
        src={profileImage}
        alt="logo"
        className="w-10 h-10 object-cover  rounded-full "
      />
      {!isCollapsed && (
        <div className="flex flex-col justify-center ml-2 text-slate-800">
          <h4 className="font-bold">{name}</h4>
        </div>
      )}
    </div>
  );
};

export default ProfileItem;
