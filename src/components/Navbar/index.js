import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Quiz from '../Login/LoginAssets/FreakLogo.png'

import './index.css';

const Navbar = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [openLeaderBoard, setLeaderboard] = useState(false)
  const [Employeeopen, SetEmployeeOpen] = useState(false)
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

  const toggleEmployee = () => {
    SetEmployeeOpen(!Employeeopen)
  }


   console.log(toggleEmployee)
   console.log(toggleSubmenu)

  return (
    <div className="main-bar-container">
      <div className={`sidebar ${sidebarOpen ? "" : "hidden"} fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900`}>
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <img src={Quiz} alt='' className="imageElementQuiz" />
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">Freak Admin Panel</h1>
            <i className="bi bi-x cursor-pointer ml-28 lg:hidden" onClick={toggleSidebar}></i>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <Link to='/Home'>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">

            <i className="bi bi-house-door-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>

        </div>
        </Link>
        <Link to='/Users'>

        <div className="p-1.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">

            <i className="bi bi-people-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Users</span>
        </div>
        </Link>

        <Link to='/Employee'>

        <div className="p-1.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">

          <i class="bi bi-person-workspace"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Employee</span>
        </div>
        </Link>

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
          <Link to='/Category'>

            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1"> Category</h1>
          </Link>
          <Link to='/Questions'>

            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1"> Questions</h1>
          </Link>


          <Link to='/Contests'>

            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1"> Contests</h1>
          </Link>
        </div>

        <div className="p-1.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">

        </div>

        {/* 
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-bookmark-fill "></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Bookmark</span>
        </div> */}
        <div className="my-4 bg-gray-600 h-[1px]"></div>
        {/* <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={toggleSubmenu}>
          <i className="bi bi-chat-left-text-fill"></i>
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
            <span className={`text-sm ${submenuOpen ? "transform rotate-180" : ""}`} id="arrow">
              <i className="bi bi-chevron-down" ></i>
            </span>
          </div>
        </div> */}
        <div className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${submenuOpen ? "" : "hidden"}`} id="submenu">
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Social</h1>
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Personal</h1>
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Friends</h1>
        </div>
        <Link to="/">
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-box-arrow-in-right"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
        </div>
        </Link>
      </div>
      <div class='container-card'>
        {/* <p className="text-center ">Welcome to Quiz - Admin Panel</p> */}





      </div>
    </div>
  );
};

export default Navbar;

