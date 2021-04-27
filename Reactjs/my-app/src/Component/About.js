import React from 'react'

import { NavLink } from 'react-router-dom'

function About() {
    // function Handler(){
        
    // const history = useHistory()
    // history.push('/home')
    
    return (
        <div>
            <h1>About</h1>
            
            <NavLink style={{textDecoration: 'none'}} to="/">home</NavLink>
        </div>
    )
}

export default About
