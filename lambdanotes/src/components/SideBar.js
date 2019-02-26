import React, { Component } from 'react';
// import { Router } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../styling/sidebar.css';

class SideBar extends Component {
    render() {
        return(
            <div className='sidebarContainer'>
                <div className='titleBar'>
                <h1 className='sidebarH1'>Lambda</h1>
                <h1 className='sidebarH1'>Notes</h1>
                </div>
               <p> <button className='sidebarButton'>
                        <NavLink to={'/'}>
                            View Your Notes
                        </NavLink>
                    </button></p>
               {/* view notes should route to "home", aka the main list */}

               <p> <button className='sidebarButton'>
                        <NavLink to={'/note/create'}>
                             + Create New Note
                        </NavLink>
                    </button></p>
               {/* create new should route to note submit form */}
            </div>
        )
    }
}

export default SideBar;