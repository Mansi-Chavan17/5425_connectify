import { useState } from "react";
import { generateContent } from "../geminie/generateContent";

export default function MatchMaking() {
    let [response,setResponse] = useState("")
    let [loading,setLoading] = useState(false)


    async function fetchMatch(){
         setLoading(true);
        try {
            let prompt = ``
            const result = await generateContent(prompt);
            setResponse(result);
            console.log(response)
        } catch (error) {
            setResponse("Failed to fetch content. Please try again.",error);
        }
            setLoading(false);
        }

  return (
    <div>
        
      <button onClick={fetchMatch}>Data</button>
      {loading? <p>Loading....</p>:<p>see data in console</p>}
    </div>
  )
}
