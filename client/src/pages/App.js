import React, { useState, useEffect, useRef } from 'react';
import {Helmet} from 'react-helmet';
import WoermModule from '../components/woermModule';
import BaerryModule from '../components/baerryModule';
import PaenutzModule from '../components/paenutzModule';
import SaelmonModule from '../components/saelmonModule';
import NickaelModule from '../components/nickaelModule';
import GyaetchModule from '../components/gyaetchModule';
import UraeniumModule from '../components/uraeniumModule';

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
          <Helmet>
                <style>{'body { background-color: white; }'}</style>
            </Helmet>
          <div className='border-leavesdark border-4 h-screen w-[50%] float-left'>
            <div ref = {clickRef}>{data.clicks}</div>
            <div onClick={() => handleClick()} className="font-default">BUTTON CLICKINGNSDIOFJSODIFJWOEIFJW</div>
          </div>
          
          <div className='border-4 border-leavesdark w-[50%] h-screen float-right overscroll-y-contain overflow-y-scroll content-end'>
          <div className='border-4 border-leavesdark  w-full text-center bg-[#779025] font-default text-4xl sticky'>
              Hunting
            </div>
            <div className='border-b'>
            <WoermModule />
            </div>
            <div className='border-b'>
            <BaerryModule />
            </div>
            <div className='border-b'>
            <PaenutzModule />
            </div>
            <div className='border-b'>
            <SaelmonModule />
            </div>
            <div className='border-b'>
            <NickaelModule />
            </div>
            <div className='border-b'>
            <GyaetchModule />
            </div>
            <div className='border-b'>
            <UraeniumModule />
            </div>
          </div>
        </div>
    );
}

export default App;