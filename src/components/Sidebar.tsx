import { FcDam, FcComboChart, FcEngineering } from "react-icons/fc";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="fixed top-18 left-0 flex flex-col w-20 h-[calc(100vh-4.5rem)] p-5 rounded-r-2xl border border-[#2b2e4f] bg-[#151945]/30 backdrop-blur-sm z-10">
      <NavLink 
        to="/dashboard" 
        className={({ isActive }) => 
          `mb-12 p-2 rounded-lg transition-all ${isActive ? 'bg-[#2b2e4f]/50' : 'hover:bg-[#2b2e4f]/20'}`
        }
        title="Home"
      >
        <FcComboChart className="text-[2rem] mx-auto" />
      </NavLink>

      <NavLink 
        to="/create-auction" 
        className={({ isActive }) => 
          `mb-12 p-2 rounded-lg transition-all ${isActive ? 'bg-[#2b2e4f]/50' : 'hover:bg-[#2b2e4f]/20'}`
        }
        title="Create Auction"
      >
        <FcDam className="text-[2rem] mx-auto" />
      </NavLink>

      <NavLink 
        to="/profile" 
        className={({ isActive }) => 
          `p-2 rounded-lg transition-all ${isActive ? 'bg-[#2b2e4f]/50' : 'hover:bg-[#2b2e4f]/20'}`
        }
        title="Profile"
      >
        <FcEngineering className="text-[2rem] mx-auto" />
      </NavLink>
    </div>
  );
}