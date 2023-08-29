import React, { useState } from "react";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import ProfileItem from "./profileItem";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <aside
      className="bg-slate-300 min-h-screen transition-all duration-500 px-2 py-4 relative "
      style={{ width: `${isCollapsed ? "60" : "250"}px` }}
    >
      <Logo isCollapsed={isCollapsed} />
      <hr />
      <Link to="/profile">
      <ProfileItem
        isCollapsed={isCollapsed}
        name="Bharat"
        profileImage="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
      />
      </Link>
      <hr />

      <ul className=" mt-4">
      <Link to="/">
        <MenuItem
          isCollapsed={isCollapsed}
          icon="src\assets\dashboard.svg"
          title="Dashboard"
        />
        </Link>

        <Link to="/employee">
        <MenuItem
          isCollapsed={isCollapsed}
          icon="src\assets\employee.svg"
          title="Employees"
        />
        </Link>
        
        <Link to="/company">
        <MenuItem
          isCollapsed={isCollapsed}
          icon="src\assets\company.svg"
          title="Companies"
        />
        </Link>

        <Link to="/salary">
        <MenuItem
          isCollapsed={isCollapsed}
          icon="src\assets\table.svg"
          title="Salary Records"
        />
        </Link>

        <Link to="/settings">
        <MenuItem
          isCollapsed={isCollapsed}
          icon="src\assets\gear.svg"
          title="Settings"
        />
        </Link>
      </ul>
      <button
        className="absolute bottom-0 left-0 w-full py-2 bg-slate-400 text-white font-bold flex flex-row-reverse p-3"
        onClick={() => setIsCollapsed((prev) => !prev)}
      >
        <img src="src\assets\collapse.svg" className="w-6 h-6"></img>
      </button>
    </aside>
  );
};

export default Sidebar;
