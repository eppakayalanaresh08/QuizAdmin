
import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import LoginPage from './components/Login';
import HomePage from './components/Home';
import Leaderboard from './components/LeaderBoard';
import Users from './components/Users';
import QuestionCreate from './components/Question';
import MainCategory from './components/MainCategory';
import ContestsPage from './components/Contests';

function App() {
  return (
    <BrowserRouter>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/leaderboard" component={Leaderboard} />
          <Route exact path="/Users" component={Users}/>
          <Route exact path="/Questions" component={QuestionCreate}/>
          <Route exact path="/MainCategory" component={MainCategory}/>
          <Route exact path="/Contests" component={ContestsPage}/>


          {/* ContestsPage */}
    </BrowserRouter>
  );
}

export default App;
