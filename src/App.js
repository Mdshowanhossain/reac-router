import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import ClubDetail from './component/ClubDetail/ClubDetail';
import BackgroundImg from './component/BackgroundImg/BackgroundImg';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadData from './LoadData/LoadData';

function App() {
  return (
    <div>
   {/* <LoadData></LoadData> */}
      <BackgroundImg></BackgroundImg>
      <Router>
        <Switch>

          <Route path="/home"><Home /></Route>
          <Route exact path="/"><Home /></Route>
          <Route path="/clubName/:name"><ClubDetail /></Route>
          <Route path="*"><NotFound /></Route>
          <Route path="/backg"><BackgroundImg /></Route>

        </Switch>
      </Router>
      
 


    </div>
  );
}

export default App;
