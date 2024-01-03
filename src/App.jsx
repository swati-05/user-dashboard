import { useState } from 'react'
import './App.css'
import Sidebar from './Pages/Sidebar'
import Header from './Pages/Header'
import UserList from './Pages/UserList'
import { Route, Routes } from 'react-router-dom'
import { contextVar } from './Components/ContextVar'
import UserView from './Pages/userView'
import AddUser from './Pages/AddUser'
import { ToastContainer } from 'react-toastify'
import Home from './Pages/Home'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [showSidebar, setshowSidebar] = useState(true)

  // values which are accessabel through the context globally
  const values = {
    showSidebar,
    setshowSidebar
  }

  // state were width of the box is defined
  const [boxWidth, setBoxWidth] = useState({
    width: "md:w-4/5",
    margin: "md:ml-64",
  });

  //  In this navClose function is for the toggle of sidebar and width size according to toggle
  const navClose = () => {
    if (showSidebar == true) {
      setBoxWidth({ width: "md:w-full", margin: "md:ml-16" });
    }
    else {
      setBoxWidth({ width: "md:w-4/5", margin: "md:ml-64" });
    }
  }


  return (
    <>
      <contextVar.Provider value={values}>
        <ToastContainer position="top-right" autoClose={2000} />
        <Header />
        <Sidebar />
        <div onClick={navClose}
          className={`sm:w-full transition-all md:pl-28 md:pr-4 ${showSidebar == true ? boxWidth.width : 'w-full'}  ${showSidebar == true ? boxWidth.margin : 'mr-0'}  overflow-y-scroll  `}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:id" element={<UserView />} />
            <Route path="/add-users" element={<AddUser />} />
          </Routes>
        </div>
      </contextVar.Provider>
    </>
  )
}

export default App
