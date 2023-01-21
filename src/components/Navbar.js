import React from 'react'
import "../Navbar.css"
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { ImCross } from 'react-icons/im'

function Navbar({setStoredToken}) {

const [State, setState] = useState(false)

// let navigate=useNavigate()
    return(
        <>
        <nav>
            
            <div className="nav-container">
            
            <div className='logo'>
                <h2>Eventify</h2>
            </div>
        <div className="navbar">
            <ul className={State ? "nav-links-mobile" : "nav-links"} onClick={() => setState(false)}>

                <p>
                    <a href="/" className="text">
                      Home
                    </a>
                </p>
              <p>
                <a href="/about" className="text">
                  About Us
                </a>
              </p>
              <p>
                <a href="/events" className="text">
                  Events
                </a>
              </p>
              <p>
                <a href="/contact" className="text">
                  Contacts
                </a>
              </p>
              

            </ul>
            
              <button
                 onClick={() => {
                   localStorage.setItem("token", "");
                    setStoredToken("");
                   }}
                 className='text'>
                  Log out
                  </button>
              
            
            <button className="mobile-menu-icon" onClick={() => setState(!State)}>
                    {State ? <ImCross /> : <FaBars />}
    
                </button>
        </div>
        </div>
        </nav>
        </>
    )
}

export default Navbar;