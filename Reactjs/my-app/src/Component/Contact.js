import React from 'react'

import { NavLink } from 'react-router-dom'
import Modal from 'react-modal';
import axios from 'axios'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      
    },
    zIndex:1,
    height: "200"
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//   Modal.setAppElement('el')

function Contact() {
    var subtitle;

    const [modalIsOpen,setIsOpen] = React.useState(false);

    let [subject,setSubject] = React.useState('')
    let [text,setText] = React.useState('')
    let [error,setError] =React.useState(null)
    let [state,setState] = React.useState(null)
    let [disable,setDisable] = React.useState(true)

    let subRef = React.useRef()
    let textRef = React.useRef()
    function openModal() {
        setIsOpen(true);
      }
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
      
  function closeModal(){
    setIsOpen(false);
  }
  async function submitHandler(e){
    e.preventDefault()
    if(textRef.current ==='' || subRef.current === ''){
      setError('please Fill up all the box')
    }
    
    if(textRef.current!== '' || subRef.current!== ''){
      let text = textRef.current
      let subject = subRef.current
      setState({text,subject})
      
      
    }
    alert(subject,text)
        
  }
  let allData = React.useMemo(()=>{
    return state
},[state])

React.useEffect(()=>{

  const source = axios.CancelToken.source()
  if(!allData){
    return
  }
   
  async function fetchApi(){
    try{
        await axios.post('http://localhost:3001/mail',allData)
        .then(data=>{
            console.log('data',data.data.message)
            // console.log(data.data.id)
            // if(data.data.message){
            //     // setId(data.data.id)
            //     // setRedirect(true)
            // }
        }).catch(err=>console.log(err))
        // .catch(err=>{
        //     // throw new Error(err)
        // })
    }
    catch(err){
     throw new Error(err)
               }}
   fetchApi()
  return ()=>{
    source.cancel()
  }
},[allData])
if(error){
  return <h1>fill a form</h1>
}
    return (
        <div>
            <h1>Contacts</h1>
            
            <NavLink style={{textDecoration: 'none'}} to="/">home</NavLink>
            <button onClick={openModal}>Open Modal</button>
        <Modal
        
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          
          // ariaHideApp={false} yo rakhesi  `Modal.setAppElement(el)` yo problem harauxa
          ariaHideApp={false}

          // style={{height:"200px"}}

        >

          <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
          <form onSubmit={(e)=>submitHandler(e)}>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" ref={subRef}></input>
            
            <label htmlFor="text">Text</label>
            <input type="text" name="text"  ref={textRef}></input>
            <button>submit</button>
          </form>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          {
                {error} && <h1 style={{backgroundColor:"rgba(243, 17, 63,.5",width:"50vw",margin:"auto"}}>{error}</h1>
            }
          </Modal>
        </div>
    )
}

export default Contact
