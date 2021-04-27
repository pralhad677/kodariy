import React from 'react'
import styles from './admin.module.css'
import axios from 'axios'

import { NavLink,useHistory } from 'react-router-dom'

function Admin() {
    let history = useHistory()

    function navFunction(){
        history.push('/auth')
    }

    const [state,setState] = React.useState(null)

    const [error,setError] = React.useState(null)

    const [name,setName] = React.useState('')
    
    const [password,setPassword] = React.useState('')

    
    const [email,setEmail] = React.useState('')

    const [redirect,setRedirect] = React.useState(false)
    
    const formRef = React.useRef() 

    let formSubmission = (e)=>{
        e.preventDefault()
        
        if(name==='' || password==='' || email===''){
            setError('please Fill up all the box')
        }
        setState({name,password,email})
        // console.log(e)
    }
    // if(error){
    //     return <h1>{error}</h1>
    // }

    let allData = React.useMemo(()=>{
        return state
    },[state])

    React.useEffect(()=>{
        
    const source = axios.CancelToken.source()
    if(!allData){
        console.log('nothing')
        return 
    }
    
    async function fetchApi(){
        try{
            await axios.post('http://localhost:3001/admin/signup',allData)
            .then(data=>{
                console.log('data',data.data.message)
                if(data.data.message){
                    setRedirect(true)
                }
            })
            .catch(err=>{
                throw new Error(err)
            })
        }
        
            catch(err){
             
             
             throw new Error(err)
                    }
                }
        fetchApi()
                
    
    return ()=>{
        source.cancel()
    }
    },[allData])

    if(redirect){
        navFunction()
    }

    return (
        <div>
            
            {
                {error} && <h1 style={{backgroundColor:"rgba(243, 17, 63,.5",width:"50vw",margin:"auto"}}>{error}</h1>
            }
            <h1 style={{margin:"0 550px"}}>SignUp</h1>
            <form onSubmit={(e)=>formSubmission(e)} ref={formRef} className={styles.form}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onClick={()=>setError(null)} onChange={(e)=>{
          
          setName(e.target.value)}} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onClick={()=>setError(null)} onChange={(e)=>{
        //   setError(null)
          setPassword(e.target.value)}}/>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" value={email} onClick={()=>setError(null)} onChange={(e)=>{
        //   setError(null)
          setEmail(e.target.value)}}/>
      <button >signUp</button>

  </form>
  <div>
      <h1>Already Have Account click 
         
  <NavLink  to="/login">here</NavLink>
           to signup
          </h1>
  </div>
        
        
  <NavLink style={{textDecoration: 'none'}} to="/">home</NavLink>

        </div>
    )
}

export default Admin
