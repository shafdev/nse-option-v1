function App() {
  








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
  