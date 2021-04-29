import React from 'react'
import axios from 'axios'
import Slider from './cmp'

let initialState =[]

let MyReducer = (state,action)=>{
    switch(action.type){
        case 'addToArray':
            return state.concat(action.data)
        default:
            return state
    }
}
let Index = React.forwardRef(({i}, ref) => {
    
//   ))
// function Index({i}) {
    let [state,dispatch] =React.useReducer(MyReducer,initialState)

    let cb = React.useCallback( async ()=>{
            let response= await axios.get('http://localhost:3001/File')
            console.log(response.data.file)

            ref.current=response.data.file.length
            dispatch({
                    type:'addToArray',
                    data:response.data.file
            })
    },[ref])

    React.useEffect(()=>{
        let mount = true
        cb()
        return ()=>{
                mount =false
        }
    },[cb])
    return (
        <div>
            {
                state.map(item=>{
                    // return <ul >
                        // <li key={item._id}>{item.name}</li>
                    // {/* </ul> */}
                    console.log('index',state.indexOf(item))
                    if(state.indexOf(item)===i)
                        
                    return   <Slider key={item._id} id={item._id} arrayLength={state.length}/>
                    
                })
            }
        </div>
    )

})

export default Index
