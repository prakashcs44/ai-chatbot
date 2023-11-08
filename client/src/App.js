
import { useState } from 'react';
import './App.css';
import Prompt from './components/Prompt';
import Output from './components/Output';

const API_URL = "http://localhost:5000/query"


function App() {

  const [query,setQuery] = useState("");
  const [response,setResponse] = useState("")


const submiQuery = async ()=>{

  const data = {query}
  
   try{
  const response = await fetch(API_URL,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
  })

  if(!response.ok){
    console.log("yollo")
  }
   else{
  const responseJson = await response.json();
   
   setResponse(responseJson)
   }
   }
   catch(err){
    console.log(err);
   }


}


  return (
   
  <div>
    <Output result={response}/>
  <Prompt setQuery = {setQuery} submitData = {submiQuery}/>
  </div>
  );
}

export default App;
