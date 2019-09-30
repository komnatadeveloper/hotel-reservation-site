import React, {useContext, useEffect}  from 'react';


import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import roomContext from './context/room/roomContext';


const  App = () => {

  const roomContext1 = useContext(roomContext)
  const { getRoomsData} = roomContext1;
  useEffect(() => {
    getRoomsData();
    // eslint-disable-next-line
  }, [])

  return (
    <>      
      <BrowserRouter>        
        <Navbar />
        <Switch>
          <Route exact path="/" component= { Home } />
          <Route exact path="/rooms/" component= { Rooms } />
          <Route exact path="/rooms/:slug" component= { SingleRoom } />
          <Route component= { Error } />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
