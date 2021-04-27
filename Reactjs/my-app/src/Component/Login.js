import React from 'react'
import styles from './Login.module.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function Login() {
    
    const [id,setId] = React.useState(null)

    let history = useHistory()

    function navFunction(id){
        history.push(`/auth/${id}`)
    }
    
    const [error,setError] = React.useState(null)
    

    
    const [state,setState] = React.useState(null)

    const [email,setEmail] = React.useState('')

    // const [name,setName] = React.useState('')
    
    const [password,setPassword] = React.useState('')

    
    const [redirect,setRedirect] = React.useState(false)

    let formSubmission = (e)=>{
        e.preventDefault()
        
        if( password==='' || email===''){
            setError('please Fill up all the box')
        }
        setState({password,email})
        // console.log(e)
    }

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
                await axios.post('http://localhost:3001/admin/login',allData)
                .then(data=>{
                    console.log('data',data.data.message)
                    console.log(data.data.id)
                    if(data.data.message){
                        
                        setId(data.data.id)
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
        navFunction(id)
    }

    return (
        <div>
             {
                {error} && <h1 style={{backgroundColor:"rgba(243, 17, 63,.5",width:"50vw",margin:"auto"}}>{error}</h1>
            }
           
           <h1 style={{margin:"0 550px"}}>Login</h1>
            <form onSubmit={(e)=>formSubmission(e)}  className={styles.form}>
      {/* <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onClick={()=>setError(null)} onChange={(e)=>{
          
          setName(e.target.value)}} /> */}
           <label htmlFor="email">Email</label>
      <input type="text" id="email" value={email} onClick={()=>setError(null)} onChange={(e)=>{
        //   setError(null)
          setEmail(e.target.value)}}/>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onClick={()=>setError(null)} onChange={(e)=>{
        //   setError(null)
          setPassword(e.target.value)}}/>
     
      <button >Login</button>

  </form>
        </div>
    )
}

export default Login
