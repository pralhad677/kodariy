import axios from 'axios';
import React from 'react'
// import axios from 'axios'

function ImageComponent({id,arrayLength}) {
    
    let [image1,setImage1]=React.useState(null)
    
    let  [i,setI] =React.useState(0)

    function toBase64(arr) {
        //arr = new Uint8Array(arr) if it's an ArrayBuffer
        return btoa(
           arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
     }

     let b =()=>{
        setI(0)
    }

     let cb = React.useCallback( async ()=>{
        let response = await axios.get(`http://localhost:3001/File/${id}`)
        console.log('cmpResponse',response.data.data.data)
        let img = toBase64(response.data.data.data)
        setImage1(img)
     },[id])

     React.useEffect(()=>{
        let mount = true
        // let interval = setInterval(()=>{
        //     console.log('jacob1')
        //     setI(++i)
        //     if(i===arrayLength){
            //   b()
        //     }
        //         
        // },1500)
        cb()
        return ()=>{
            mount =false
            // clearInterval(interval)
          }
     },[cb,i,arrayLength])
    return (
        <div style={{marginBottom:"20px"}}>
            <h1>{arrayLength}</h1>
            <div style={{height:"300px",width:"300px"}} >
            {
                {image1} && <img style={{height:"100%",width:"100%"}} src={`data:image/jpg;base64,${image1}`} alt="pic"></img>
            }
            </div>
             
        </div>
    )
}

export default ImageComponent
