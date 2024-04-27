
import React from "react";
import './index.css'
import Navbar from "../Navbar";

import { ColorCode  } from "../ColorCode";

const HomePage = () => {


    return (
        <div>
            
        
        
        <div className="bgContainer" style={{backgroundColor:ColorCode.bgColor}}>
            <Navbar/>
           
            <div class='container-card'>
                <p className="text-center adiminheading" style={{color:ColorCode.textColor}}>Welcome to Freak - Admin Panel</p>
                <div className="eachCardContainer">
                    <div
                        class="transform  rounded-xl eachcard  bg-black shadow-xl transition duration-300 hover:scale-105 container-each-card">
                        <div>
                            <h1 className='numbertext' style={{color:ColorCode.textColor}}>14</h1>
                            <h1 className="nameTotalcountcard" style={{color:ColorCode.cardText}}>Total Categories</h1>
                        </div>
                        <i class="bi bi-people-fill" style={{color:ColorCode.cardText}}></i>

                    </div>

                    <div
                        class="transform  rounded-xl eachcard  bg-black shadow-xl transition duration-300 hover:scale-105  container-each-card">
                        <div>
                            <h1 className='numbertext' style={{color:ColorCode.textColor}}>34</h1>
                            <h1 className="nameTotalcountcard" style={{color:ColorCode.cardText}}>Total SubCategories</h1>
                        </div>
                        <i class="bi bi-people-fill" style={{color:ColorCode.cardText}}></i>

                    </div>
                    <div
                        class="transform  rounded-xl eachcard  bg-black shadow-xl transition duration-300 hover:scale-105  container-each-card">
                        <div>
                            <h1 className='numbertext' style={{color:ColorCode.textColor}}>1239</h1>
                            <h1 className="nameTotalcountcard" style={{color:ColorCode.cardText}}>Total Questions</h1>
                        </div>
                        <span class="material-symbols-outlined ">
                        </span>

                    </div>
                    <div
                        class="transform  rounded-xl eachcard  bg-black shadow-xl transition duration-300 hover:scale-105  container-each-card">
                        <div>
                            <h1 className='numbertext' style={{color:ColorCode.textColor}}>12721</h1>
                            <h1 className="nameTotalcountcard" style={{color:ColorCode.cardText}}>Registered Devices</h1>
                        </div>
                        <i class="bi bi-recycle" style={{color:ColorCode.cardText}}></i>
                    </div>
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