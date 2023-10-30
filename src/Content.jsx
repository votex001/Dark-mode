import React from "react"
import Navbar from "../public/Navbar.jsx"
import Main from "../public/Main.jsx"

export default function App() {
    const [darkMode,setdarkMode] = React.useState(false)
    function toggleDarkMode(){
       setdarkMode(dark=>!dark)
    }



    return (
        <div className="container">
            <Navbar 
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode} />
            <Main darkMode={darkMode}/>
        </div>
    )
}