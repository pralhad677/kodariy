import React from 'react'
import {Helmet} from 'react-helmet'

function FbComent() {
    return (
        <div>
            <div id="fb-root"></div>

            <Helmet>
        
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0" nonce="hSZMxKKj"></script>

            </Helmet>
            
<div class="fb-comments" data-href="http://localhost:3000/FbComment" data-width="300" data-numposts="10"></div>
                <h1>FbComment</h1>
        </div>
    )
}

export default FbComent
