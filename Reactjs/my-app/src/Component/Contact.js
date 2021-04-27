import React from 'react'

import { NavLink } from 'react-router-dom'
function Contact() {
    
//   let history = useHistory();
//     function Handler(){
        
//     history.push('/home')
//     }
    return (
        <div>
            <h1>Contacts</h1>
            
            <NavLink style={{textDecoration: 'none'}} to="/">home</NavLink>
        </div>
    )
}

export default Contact
