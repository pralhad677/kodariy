import React from 'react'
import styles from './home.module.css'

import { NavLink } from 'react-router-dom'
// import {arr as array} from './Array' 
import axios from 'axios'
import ImageLoader from './redux/index'

function Home() {
    // let [state,setState] =React.useState(0)
    let arr = React.useRef([]);

    const ref = React.useRef();
    
    let [state,setState]=React.useState(null)
    let [image1,setImage1]=React.useState(null)
    
    // let [length,setLength] = React.useState(1)
    
    
    
    let  [i,setI] =React.useState(0)

    
   
    // if(array1.length>0){
        
    //         a(i)
           
            
    // }
    // function toBase64(arr) {
    //     //arr = new Uint8Array(arr) if it's an ArrayBuffer
    //     return btoa(
    //        arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
    //     );
    //  }
    
let b =()=>{
    setI(0)
}
// let getLength=(length)=>{
//     console.log('length',length)
//     for(let i=0;i<=length;i++){
//         let array=[]
//         // if(length >= i){
//             array.push(i)
//             console.log('array inside',array)
//             arr.current=array
//     //     }
//     //    array.push(i)
//     //    arr.current=array
//     }
// }



          
             
console.log('arr',arr.current)
            
         
    // let cal = React.useCallback(()=>{
    //     return myarr[0]
    // },[myarr])

    React.useEffect(()=>{
        // let mount = true
        
    const source = axios.CancelToken.source()

                var interval = setInterval( async ()=>{
                    console.log('jacob1')
                    setI(++i)
                    arr.current.length=ref.current
                    if(i===arr.current.length){
                       b()
                    }
                   
                  
                //     async function fetchApi(){
                //         try{
                //             await axios.get('http://localhost:3001/File')
                //             .then(data=>{
                //                 console.log('data',data.data.file)
                                
                //                 // console.log('inner array1',array1)
                //                 setState(!state)
                //                 // if(data.data.message){
                //                 //     // setRedirect(true)
                //                 //     array1.concat(data.data.file)
                //                 // }
                //             }) 
                    

                //     .catch(err=>{
                //         throw new Error(err)
                //     })
                // }
                
                    // catch(err){
                     
                     
                    //  throw new Error(err)
                    //         }
                    //     }
                    // fetchApi()
                  
                    // function getImage(){
                       
                    // }
                    // getImage()
                   
                },3000)

                // async function fetchApi(){
                //     try{
                //         await axios.get('http://localhost:3001/File')
                //         .then(data=>{
                //             console.log('data',data.data.file)
                //             array1.concat(data.data.file)
                //             if(data.data.message){
                //                 // setRedirect(true)
                //                 // array.push(data.data.file)
                //             }
                //         })
                    //     .catch(err=>{
                    //         throw new Error(err)
                    //     })
                    // }
                    
                    //     catch(err){
                         
                         
                    //      throw new Error(err)
                    //             }
                    //         }
                    

                  
                    // if(array1.length===0){
                    //     cal()
                    // }
                    
                   
                    
                    // getLength(i)
        
        return ()=>{
            // mount=false
            
        source.cancel()
            clearInterval(interval)
            // return clearInterval(interval)
        }
    },[arr.length,i,state,])
    return (
        <div className={styles.topParent}>
         
             <header> 
                 <nav>
               <ul className={styles.parent} >

               <NavLink style={{ textDecoration: 'none' }} to="/about" >About Us</NavLink>
            
            
            <NavLink style={{ textDecoration: 'none' }} to="/service" >Services</NavLink>

            
            <NavLink style={{ textDecoration: 'none' }} to="/contact" >Contact Us</NavLink>
            
            <NavLink style={{ textDecoration: 'none' }} to="/help" >Help</NavLink>
            
            <NavLink style={{ textDecoration: 'none' }} to="/admin" >Admin</NavLink>
                  

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

           {/* {
                {image1} && <img src={`data:image/jpg;base64,${image1}`} alt="pic"></img>
            } */}
            <ImageLoader ref={ref} i={i} />
           <footer style={{position:"fixed",bottom:"0"}}>
                <p>Company: Kodairy</p>
                <p><a href="https://kodiary.com/">Kodairy</a></p>
            </footer>
        </div>
    )
}

export default Home
