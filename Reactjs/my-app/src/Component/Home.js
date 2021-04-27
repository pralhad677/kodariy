import React from 'react'
import styles from './home.module.css'

import { NavLink } from 'react-router-dom'

function Home() {
    // let [state,setState] =React.useState(0)
    let arr = [1,2,3,4];
    
    let  [i,setI] =React.useState(0)

    
let b =()=>{
    setI(0)
}
    

    React.useEffect(()=>{
        let mount = true

                var interval = setInterval(()=>{
                    console.log('jacob')
                    setI(++i)
                    if(i===arr.length){
                       b()
                    }
                   
                },3000)
            
        
        return ()=>{
            // mount=false
            clearInterval(interval)
            // return clearInterval(interval)
        }
    },[arr.length,i])
    return (
        <div className={styles.topParent}>
         
             <header> 
                 <nav>
               <ul className={styles.parent} >

               <NavLink style={{ textDecoration: 'none' }} to="/about" >About Us</NavLink>
            
            
            <NavLink style={{ textDecoration: 'none' }} to="/service" >Services</NavLink>

            
            <NavLink style={{ textDecoration: 'none' }} to="/contact" >Contact Us</NavLink>
            
            <NavLink style={{ textDecoration: 'none' }} to="/help" >Help</NavLink>
                  

               </ul>
        </nav>
               </header> 
               {/* <Switch> */}
                   {/* <Route ></Route>
                   
                   <Route></Route>
                   
                   <Route></Route>
                   
                   <Route></Route> */}
               {/* </Switch> */}
              
               
            <h1>{arr[i]}</h1>
          
            {/* {arr[i]} */}
           <h1 >this is home page</h1> 
          
        </div>
    )
}

export default Home
