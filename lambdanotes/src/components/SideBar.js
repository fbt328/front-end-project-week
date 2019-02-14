import React, { Component } from 'react';
import { Router } from 'react-router-dom';

class SideBar extends Component {
    render() {
        return(
            <div className='sidebarContainer'>
                Sidebar will be here (currently unstyled)
                <h1>Lambda Notes</h1>
               <p> <button>View Your Note(doesn't work yet)</button></p>
               {/* view notes should route to "home", aka the main list */}
               <p> <button>+Create New Note(doesn't work yet)</button></p>
               {/* create new should route to note submit form */}
            </div>
        )
    }
}
export default SideBar;