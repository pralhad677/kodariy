import React from 'react'

import FormData from 'form-data'
import axios from 'axios'
import {arrayItem,arr,getElementById} from './Array'

function Dashboard() {
    const [userImage, setUserImage] = React.useState('');
    
    const [disable, setDisable] = React.useState(true);
    let [error,setError] = React.useState('')
    let [success,setSuccess] = React.useState()
  
  // const onSubmit = (data:any) => console.log(data);



  const fileRef = React.useRef()

  let imageHandler = e=>{
    console.log('file',e.target.files[0])
    // if(e.target.files[0] === null){
            
    // setError('error occurs while uploading image')
    // }

    setUserImage(e.target.files[0])
    setDisable(false)
}

function FilterObj(obj,path='path',message='message'){
    let arrObj = Object.keys(obj)
    
    for(let i=0;i <arrObj.length;i++){
      if(arrObj.includes(path,message))
      delete obj[path]
      delete obj[message]
    }
    return obj
  }
  
  let submitHandler =async ()=>{
   
   console.log('file',userImage)
   if(userImage ===null){
        
    setError('error occurs while uploading image')
   }

   
     // let file = fileRef.current
     
     // await axios.post('http://localhost:3001/api/v1/users/uploadFIle',{},{ headers: {
     //   'accept': 'application/json',
     //   'Accept-Language': 'en-US,en;q=0.8',
     //   'Content-Type': `multipart/form-data; boundary=${data._boundary}`,})
     // }
 
     var bodyFormData = new FormData();
    //  if(userImage?.name === null||undefined) setError(true)
    // if(userImage?.name){
    // setError('error occurs while uploading image')
    // }
     bodyFormData.append('Image', userImage,userImage.name);
  let response =await axios.post(
    'http://localhost:3001/File',
    // data:bodyFormData,
    bodyFormData,
    // headers: { 
      
    //    "Content-Type": "multipart/form-data"
    //    },
  )
  let data = await response;
  let id = data.data.id
  let name = data.data.name
  console.log(data)
  console.log(data.data)
  let filteredRsponse =FilterObj(data.data)
  let findId1 = getElementById(name)
//   if(findId1===undefined){
        
  arr.push(filteredRsponse)
//   }
  if(data.status === 201){
      setSuccess('success while uploading image')
  }
  
//   setError('error occurs while uploading image')
//   if(data.status !== 201){
//   }
    console.log(arr.forEach(console.log))
  console.log(id)
  
    //  await axios.post('http://localhost:3001/api/v1/users/uploadFIle',bodyFormData, {
    //     headers: {
    //       Accept: 'application/json',
    //       // 'Content-Type': 'multipart/form-data' 
    //       // { 'Content-Type': 'multipart/form-data' }
    //     }
    //   }).then(console.log)
  
    }
    if(error){
        return <h1>{error}</h1>
    }
    return (
        <div>
            <h1>Welcome to DashBoard</h1>

    {/* <form onSubmit={e=>submitHandler(e)} encType="multipart/form-data">
      <input name="Image" type="file" accept="image/*"  onChange={(e)=>setUserImage(e.target.files[0])} />
      
      <button type="submit">submit</button>
      </form> */}
      <div>
          
       <input name="Image" type="file" accept="image/*"  onChange={e=>imageHandler(e)} />
       <button disabled={disable} onClick={submitHandler}>Upload</button>
      </div>
      <div>
      
         
      
          <h1>{success}</h1>
          {/* <h1>{error}</h1> */}
      
      
      </div>
      
        </div>
    )
}

export default Dashboard
