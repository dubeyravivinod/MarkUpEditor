import React from 'react'
import '../Compo_css/Navbar.css'
const Navbar = () => {
  return (
    <>
    <div className="leftside">
      <h1><span>M</span>arkdown <span>E</span>ditor</h1>
    </div>
    <div className="rightside">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
    </>
  )
}

export default Navbar