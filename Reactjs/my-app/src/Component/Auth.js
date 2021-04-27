import React from 'react'
import {useRouteMatch} from 'react-router-dom'

function Auth() {
    let match = useRouteMatch
    let {path,url} = match
    console.log(path,url)
    return (
        <div>
            <h1>Auth Page</h1>
        </div>
    )
}

export default Auth
