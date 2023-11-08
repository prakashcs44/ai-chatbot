
const {config}  = require("dotenv")

const express  = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

config();




const { BardAPI } = require('bard-api-node');

async function testAssistant(query) {
  try {
    const assistant = new BardAPI();

    // Set session information for authentication
    await assistant.setSession('__Secure-1PSID', process.env.SESSION_KEY); // or '__Secure-3PSID'
    // ...

    // Send a query to Bard
    const response = await assistant.getBardResponse(query);
    return response.content;
  } catch (error) {
    console.error('Error:', error);
  }
}





app.post("/query",async(req,res)=>{
  const {query} = req.body;

  const result = await testAssistant(query);
  console.log(result);
  res.json(result);
})


app.listen("5000",()=>{
  console.log("SERVER RUNNING")
})