import React, { Component } from 'react';
// import { Router } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class SideBar extends Component {
    render() {
        return(
            <div className='sidebarContainer'>
                Sidebar will be here (currently unstyled)
                <h1>Lambda Notes</h1>
               <p> <button>
                        <NavLink to={'/'}>
                            View Your Notes(works now)
                        </NavLink>
                    </button></p>
               {/* view notes should route to "home", aka the main list */}

               <p> <button>
                        <NavLink to={'/note/create'}>
                             +Create New Note (works now))
                        </NavLink>
                    </button></p>
               {/* create new should route to note submit form */}
            </div>
        )
    }
}
export default SideBar;