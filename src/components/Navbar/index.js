// import React from 'react'

// function index() {
//   return (
//     <div>index</div>
//   )
// }

// export default index
























import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './index.css';

const Navbar = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [openLeaderBoard, setLeaderboard] = useState(false)
  const [Employeeopen,SetEmployeeOpen]=useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [QuizZoneOpen, setQuizZone] = useState(false)

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleLeaderBoard = () => {
    setLeaderboard(!openLeaderBoard)
  }

  const togglesetQuizZone = () => {
    setQuizZone(!QuizZoneOpen)
  }

  const toggleEmployee=()=>{
   SetEmployeeOpen(!Employeeopen)
  }



  return (
    <div>
      <div className={`sidebar ${sidebarOpen ? "" : "hidden"} fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900`}>
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">Quiz Admin Panel</h1>
            <i className="bi bi-x cursor-pointer ml-28 lg:hidden" onClick={toggleSidebar}></i>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <Link to='/Home'>

            <i className="bi bi-house-door-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
          </Link>

        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={toggleEmployee}>
        <i class="bi bi-person-workspace"></i>
                  <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold" >Employee </span>
            <span className={`text-sm ${Employeeopen ? "transform rotate-180" : ""}`} id="arrow">
              <i className="bi bi-chevron-down" ></i>
            </span>
          </div>
        </div>
        <div className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${Employeeopen ? "" : "hidden"}`} id="submenu">
          {/* leaderboard */}
          <Link to='/leaderboard'>
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Add Employee</h1>
          </Link>

          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Update Employee</h1>
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Delete Employee</h1>
        </div>

        <div className="p-1.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <Link to='/Users'>

            <i className="bi bi-people-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Users</span>
          </Link>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={toggleLeaderBoard}>
          <i class="bi bi-trophy-fill"></i>
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">LeaderBoard</span>
            <span className={`text-sm ${openLeaderBoard ? "transform rotate-180" : ""}`} id="arrow">
              <i className="bi bi-chevron-down" ></i>
            </span>
          </div>
        </div>
        <div className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${openLeaderBoard ? "" : "hidden"}`} id="submenu">
          {/* leaderboard */}
          <Link to='/leaderboard'>
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">All</h1>
          </Link>

          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Monthly</h1>
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Daily</h1>
        </div>


        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={togglesetQuizZone}>
          <i class="bi bi-question-square-fill"></i>
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Quiz Zone</span>
            <span className={`text-sm ${QuizZoneOpen ? "transform rotate-180" : ""}`} id="arrow">
              <i className="bi bi-chevron-down" ></i>
            </span>
          </div>
        </div>

        <div className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${QuizZoneOpen ? "" : "hidden"}`} id="submenu">
          {/* MainCategory */}
          <Link to='/MainCategory'>

            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Add Questions</h1>
          </Link>

          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Sub Category</h1>
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Category Order</h1>
          <Link to='/Questions'>

            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Main Category</h1>
          </Link>

        </div>

        <div className="p-1.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <Link to='/Contests'>

            <i class="bi bi-gift-fill"></i>            <span className="text-[15px] ml-4 text-gray-200 font-bold"> Contests</span>
          </Link>
        </div>


        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-bookmark-fill "></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Bookmark</span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px]"></div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={toggleSubmenu}>
          <i className="bi bi-chat-left-text-fill"></i>
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
            <span className={`text-sm ${submenuOpen ? "transform rotate-180" : ""}`} id="arrow">
              <i className="bi bi-chevron-down" ></i>
            </span>
          </div>
        </div>
        <div className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${submenuOpen ? "" : "hidden"}`} id="submenu">
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Social</h1>
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Personal</h1>
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Friends</h1>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-box-arrow-in-right"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
        </div>
      </div>
      <div class='container-card'>
        {/* <p className="text-center ">Welcome to Quiz - Admin Panel</p> */}





      </div>
    </div>
  );
};

export default Navbar;

