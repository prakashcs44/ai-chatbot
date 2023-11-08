
import { useState } from 'react';
import './App.css';
import Prompt from './components/Prompt';
import Output from './components/Output';
import Loading from './components/Loading';

const API_URL = "http://localhost:5000/query"


function App() {

  const [query,setQuery] = useState("");
  const [response,setResponse] = useState("")

  const [loading,setLoading] = useState(false)


const submitQuery = async ()=>{
  setResponse("")
  setLoading(true)
  const data = {query}
  setQuery("");
  
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
   setLoading(false);
   setResponse(responseJson)
   }
   }
   catch(err){
    console.log(err);
   }
 

}


  return (
   
  <div>
    <h1> MY AI </h1>
    <Output result={response}/>
    {loading?<Loading/>:(<></>)}
  <Prompt setQuery = {setQuery} submitData = {submitQuery} query = {query}/>
  </div>
  );
}

export default App;
