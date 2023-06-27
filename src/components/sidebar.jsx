"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter()

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <aside className="bg-black text-white w-56 h-screen flex flex-col justify-start items-center text-2xl">
      <h1>Mensajería A&B</h1>
      <button className="text-gray-300 border-l border-gray-400 hover:text-white hover:border-l hover:border-white py-2 px-10"
      onClick={()=>router.push('/dashboard')}>
        <p>Dashboard</p>
      </button>
      <div>
        <button
          onClick={toggleDropdown}
          className={` hover:text-white hover:border-white py-2 px-9 ${
            dropdownOpen
              ? "border-l hover:text-white hover:border-white"
              : "text-gray-300 border-l border-gray-400"
          }`}
        >
          <p>Mensajeros</p>
        </button>
        {dropdownOpen && (
          <ul className="flex flex-col [&>li]:hover:cursor-pointer">
            <li className="animate-fade-right animate-once animate-duration-[400ms] animate-ease-out animate-normal animate-fill-both"
            onClick={()=>router.push('/dashboard/messenger-list')}>
              Lista
            </li>
            <li className="animate-fade-right animate-once animate-duration-[400ms] animate-delay-75 animate-ease-out animate-normal animate-fill-both">
              Pedidos
            </li>
            <li className="animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-out animate-normal animate-fill-both">
              Historial
            </li>
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
