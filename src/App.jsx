import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import { UserSidebar } from './components/layouts/UserSidebar'
import "./assets/css/adminlte.css"
import "./assets/css/adminlte.min.css"
import { Login } from './components/common/Login'
import { SignUp } from './components/common/SignUp'

function App() {
 

  return (
    <body class="layout-fixed sidebar-expand-lg bg-body-tertiary">
      <div className='app-wrapper'>
        <Routes>
          <Route path='/Login' element={<Login></Login>}></Route>
          <Route path='/Signup' element={<SignUp></SignUp>}></Route>
          <Route path='/usersidebar' element={<UserSidebar></UserSidebar>}></Route>
        </Routes>
      </div>
    </body>
  )
}

export default App
