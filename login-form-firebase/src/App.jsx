import React from 'react';
// import { Toggle } from './component/Toggle';
import Dashboard from './component/Dashboard';
import { SignIn } from './component/Singin';
import { SignUp } from './component/SingUp';
import Toggle from './component/Toggle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      {/* <Toggle/> */}
      {/* <Dashboard/> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Toggle/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}
