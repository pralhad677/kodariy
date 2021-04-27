import React from 'react'

import { NavLink } from 'react-router-dom'

function Services() {
    // function Handler(){
        
    // const history = useHistory()
    // history.push('/home')
    // }
    return (
        <div>
            <NavLink style={{textDecoration: 'none'}} to="/">home</NavLink>
            <h1>Services</h1>
        </div>
    )
}

export default Services
