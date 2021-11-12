import React, { useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo7.png';
import {UserContext} from '../App';

const Navbar = () => {
   

    const {state, dispatch} = useContext(UserContext);


    const RenderMenu = () => {
        if(state) {
            return (
                <>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categories">Categories</NavLink>
                        </li>
                        <li className="nav-item">
                             <NavLink className="nav-link" to="/about">Profile</NavLink> 
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                      
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/logout">Logout</NavLink>
                        </li>
                </>
            )
        } else {
              return (
                  <>
                    <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categories">Categories</NavLink>
                        </li>
                        
                        
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">Register</NavLink>
                        </li>
                       
                  </>
              )
        }
    }


    return (

      
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand"  to="#">
                    <img src={logo} alt="logo" /> Flub-Waste Bank
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav" style={{marginLeft:'auto', marginRight:'10px'}}>
                   
                     <RenderMenu/>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar