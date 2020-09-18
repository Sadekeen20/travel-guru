import React, { createContext, useState } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Book from './components/Book/Book';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import Map from './components/Map/Map';
export const UserContext = createContext();
function App() {
  
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} style={{backgroundImage:' url("../Image/mainbg.png")'}}>
      <p>Email:{loggedInUser.email}</p>
    <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/place/:placeDetail">
            <PlaceDetails></PlaceDetails>
          </Route>
          <PrivateRoute path="/book/:placeName">
            <Book />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
