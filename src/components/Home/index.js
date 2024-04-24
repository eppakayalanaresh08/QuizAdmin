// // import { View, Text } from 'react-native'
// // import React from 'react'

// // const Home = () => {
// //   return (
// //     <View>
// //       <Text>index</Text>
// //     </View>
// //   )
// // }

// // export default Home
















import React from "react";
import './index.css'
import Navbar from "../Navbar";

const HomePage = () => {


    return (
        <div>
            <Navbar/>
            {/* <div className={`sidebar ${sidebarOpen ? "" : "hidden"} fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900`}>
                <div className="text-gray-100 text-xl">
                    <div className="p-2.5 mt-1 flex items-center">
                        <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
                        <h1 className="font-bold text-gray-200 text-[15px] ml-3">Quiz Admin Panel</h1>
                        <i className="bi bi-x cursor-pointer ml-28 lg:hidden" onClick={toggleSidebar}></i>
                    </div>
                    <div className="my-2 bg-gray-600 h-[1px]"></div>
                </div>

                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                    <i className="bi bi-house-door-fill"></i>
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
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
            </div> */}
            
            <div class='container-card'>
                <p className="text-center ">Welcome to Freak - Admin Panel</p>



                <div className="eachCardContainer">
                    <div
                        class="transform  rounded-xl eachcard  bg-white shadow-xl transition duration-300 hover:scale-105">
                        <div>
                            <h1 className='numbertext'>14</h1>
                            <h1>Total Categories</h1>
                        </div>
                        <i class="bi bi-people-fill"></i>

                    </div>

                    <div
                        class="transform  rounded-xl eachcard  bg-white shadow-xl transition duration-300 hover:scale-105">
                        <div>
                            <h1 className='numbertext'>34</h1>
                            <h1>Total Categories</h1>
                        </div>
                        <i class="bi bi-people-fill"></i>

                    </div>
                    <div
                        class="transform  rounded-xl eachcard  bg-white shadow-xl transition duration-300 hover:scale-105">
                        <div>
                            <h1 className='numbertext'>1239</h1>
                            <h1>Total Categories</h1>
                        </div>
                        <span class="material-symbols-outlined">
                        </span>

                    </div>
                    <div
                        class="transform  rounded-xl eachcard  bg-white shadow-xl transition duration-300 hover:scale-105">
                        <div>
                            <h1 className='numbertext'>12721</h1>
                            <h1 >Total Categories</h1>
                        </div>
                        <i class="bi bi-recycle"></i>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomePage;




// import React from 'react'

// function HomePage() {
//   return (
//     <div>index</div>
//   )
// }

// export default HomePage