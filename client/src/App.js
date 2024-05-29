import React, { useState, useEffect, useRef } from 'react';

function App() {
  let [data, setData] = useState({});
  let [user, setUser] = useState()
  const clickRef = useRef(0) // keeps track of clicks displayed

  const getInitialData = async () => {
    try {
      console.log("GETTING INITIAL DATA")
      const response = await fetch('http://127.0.0.1:3001/')
      const newData = await response.json()
      setData(newData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  //testing git on mac again

  useEffect(() => { // gets initial data from server side
    getInitialData()
  }, [])

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setUser(user)
    }
  }, [])

  useEffect(() => { // update to server everry set interval

    console.log(`initializing interval`);
    const interval = setInterval(async () => {
      console.log(clickRef.current.textContent)
      const response = await fetch('http://127.0.0.1:3001/click', {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ clicks: clickRef.current.textContent })
      })
    }, 5000); // 1000 is 1 second
  
    return () => {
      console.log(`clearing interval`);
      clearInterval(interval);
    };
}, []); 

  const handleClick = () => {
    const curr_clicks = data.clicks
    setData({ clicks: curr_clicks + 1 })
  }

    return (
        <div>
            <h1>React + Node.js Integration</h1>
            <div ref = {clickRef}>{data.clicks}</div>
            <div onClick={() => handleClick()} className="">BUTTON CLICKINGNSDIOFJSODIFJWOEIFJW</div>
            <h2 className="font-header text-3xl">hello</h2>
        </div>
    );
}

export default App;