import { useState,useEffect } from "react"
import './styles/Study.css'
 
const Study= ()=> {
  const [value,setValue ]=useState(null)
  const [message, setMessage]=useState(null)
  const [previousChats,setPreviousChats]=useState([])
  const [currentTitle, setCurrentTitle]=useState(null)
  
  const createNewChat= () =>{
    setMessage(null)
    setValue("")
    setCurrentTitle(null)
  }

  const handleClick = (uniqueTitle)=> {
    setCurrentTitle(uniqueTitle)
    setMessage(null)
    setValue("")
  }

  const getMessages= async()=>{
    const options={
      method: "POST",
      body:JSON.stringify({
        message:value
      }),
      headers:{
        "Content-Type": "application/json"
      }
    }

    try{
        const response = await fetch ("http://localhost:8000/completions",options)
        const data = await response.json()
        
        setMessage(data.choices[0].message)

    }catch(error){
      console.error(error)
    }
  }


  useEffect(()=>{
    console.log(currentTitle,value,message)
    if (!currentTitle && value && message){
      setCurrentTitle(value.split(" ").slice(0, 3).join(" "))
    }
   
    if (currentTitle && value && message){
      setPreviousChats(prevChats =>(
        [...prevChats,
          {
            title: currentTitle,
            role:"user",
            content:value
          },
          {
            title: currentTitle,
            role: message.role,
            content: message.content
          }

        ]
      ))
    }
  },[message,currentTitle])

  console.log(previousChats)

  const currentChat = previousChats.filter(previousChat => previousChat.title === currentTitle)
  // const uniqueTitles= Array.from(new Set (previousChats.map(previousChat => previousChat.title)))
  const uniqueTitles = Array.from(new Set(previousChats.map(previousChat => previousChat.title.split('\n')[0])));
  console.log(uniqueTitles)



  return (
   
    <div className="study">
   
      <section className="side-bar">
      <button onClick={createNewChat}>New Q-Gen</button>
        <ul className="history">
        {uniqueTitles?.map((uniqueTitle, index) => <li key ={index} onClick={ ()=> handleClick(uniqueTitle)}>{uniqueTitle}</li>)}
        </ul>
      </section>
      <section className="main">
      {!currentTitle && <h1>Q-Gen MCQ Generator</h1>}
      <ul className="feed">
          {currentChat?.map((chatMessage,index) => <li key = {index}>
            <p className="role">{chatMessage.role}</p>
            <p>{chatMessage.content}</p>
          </li>)}
        </ul>
        <div className="bottom-secton">
          <div className="input-container">
          
          <textarea className ="box" rows={4} value={value} onChange={(e)=> setValue(e.target.value)}/>
              <div id="submit" onClick={getMessages}>SUBMIT</div>
          </div>
        </div>
      </section>
    </div>
  
  );
}

export default Study;

