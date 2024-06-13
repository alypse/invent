
import React, { useEffect, useState } from 'react';
import './App.css';
import { Home } from './components/Home';
import { Users } from './components/Users';

enum VIEWS {
    HOME = 'home',
    USERS = 'users'
}


export const App = () => {
    const [view, setView] = useState(VIEWS.HOME);
    return (
        <div className="App">
            <div className="Header" id="HeaderMain">
                <div className="Nav">
                    <button className="button-60" role="button" onClick={() => setView(VIEWS.HOME)}>Home</button>
                    <button className="button-60" role="button" onClick={() => setView(VIEWS.USERS)}>Users</button>
                </div>
                <div id="HeaderTitle">Invent</div>
            </div>
            <div className="View">
            {view === VIEWS.HOME && <Home />}
            {view === VIEWS.USERS && <Users />}
            </div>
        </div>
  );
}
