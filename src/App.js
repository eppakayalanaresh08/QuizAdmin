
import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import LoginPage from './components/Login';
import HomePage from './components/Home';
import Leaderboard from './components/LeaderBoard';
import Users from './components/Users';
import ContestsPage from './components/Contests';
import EditEmployee from './components/EditEmployee';
import CategoryCreate from './components/Category';
import EmployeePage from './components/EmployeePage';
import Marquee from "react-fast-marquee";
import QuestionsCategory from './components/Questions';



function App() {
  return (
    <BrowserRouter>
      <Marquee style={{color:'red',backgroundColor:'White',fontFamily:'Roboto',fontSize:25}}>
      API Integration are currently in progress, and we will provide updates shortly.    </Marquee>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/leaderboard" component={Leaderboard} />
          <Route exact path="/Users" component={Users}/>
          <Route exact path="/Category" component={CategoryCreate}/>
          {/* <Route exact path="/Questions" component={MainCategory}/> */}
          <Route exact path="/Questions" component={QuestionsCategory}/>

          <Route exact path="/Contests" component={ContestsPage}/>
          <Route exacr path="/Edit" component={EditEmployee}/>
          <Route exacr path="/Employee" component={EmployeePage}/>

          {/* EmployeePage */}


    </BrowserRouter>
  );
}

export default App;
