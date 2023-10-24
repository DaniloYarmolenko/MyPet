import React, { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";

import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";
import NotfoundPage from "./pages/NotfoundPage";




function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/userSingIn' element={<UserPage/>}/>
            <Route path='*' element={<NotfoundPage/>}/>
        </Routes>

    </div>
  );
}

export default App;