import axios from 'axios';
import { useEffect } from 'react';
function App() {
  const url2="/api/option-chain-indices?symbol=NIFTY";
  axios.get(url2).then(res =>{
    const persons = res.data;
    console.log(persons);
  })

  // const url = 'https://aqueous-oasis-11633.herokuapp.com/api';
  // const [people,setPeople] = useState([]);
  const setData = async ()=>{
    const url = 'https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    // const nameList = data;
    // setPeople(data)
  }
  useEffect(()=>
    setData()
  ,[])




  //proxy == "https://www.nseindia.com" //  "https://api.sensibull.com"
  ///***************** */
  
  // const url1="/api/option-chain-indices?symbol=NIFTY";
  // const url2="/v1/underlying_instruments?";
  // const url3='/v1/underlying_instruments?'
  //   fetch(url1)
  //   .then(response => response.json())
  //   .then(data => console.log(data));
  
  ///////*************///////// */
  
    // getData();
    // "proxy":"https://www.nseindia.com",
  const getData = async ()=>{
    // const url2="https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY";
    const url1="/api/option-chain-indices?symbol=NIFTY";
    const response = await fetch(url1);
    const data = await response.json();
    console.log(data);
  
  }
  
  getData();
  
  
  
  
  
    return (
      <div >
       <h1>Hello World</h1>
      </div>
    );
  }
  
  export default App;
  