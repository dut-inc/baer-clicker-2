import React, { useState, useEffect, useRef } from 'react';
import {Helmet} from 'react-helmet';
import UpgradeModule from '../components/upgradeModule.js';
import baerry from '../assets/baerry.png'
import gyaetch from '../assets/gyaetch.png'
import nickael from '../assets/nickael.png'
import paenut from '../assets/paenut.png'
import saelmon from '../assets/saelmon.png'
import uraenium from '../assets/uraenium.png'
import woerm from '../assets/woerm.png'

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

  // const huntResult = () => {
  //   for (let food in foodInfo) {
  //     let chance = foodInfo[food][0]
  //     let rand = Math.random()*100
  //     foodInfo[food][2] = Math.trunc(chance/100) + (chance%100 <= rand ? 1 : 0)
  //   }
  // }


  const foodList = [
    { title: "Woerm", levelInfo: "Lvl 1: 100% Success", description: "Not much, but it'll have to do for now...", image: woerm },
    { title: "Baerry", levelInfo: "Lvl 1: 50% Success", description: "The basic source of any strong baer's nutrition.", image: baerry },
    { title: "Paenutz", levelInfo: "Lvl 1: 25% Success", description: "Laughably small, yet highly nutritious.", image: paenut }, 
    { title: "Gyatch", levelInfo: "Lvl 1: 100% Gyat", description: "Have you seen Yinlin bro oh my lord", image: gyaetch },
    { title: "Nickael", levelInfo: "Lvl 1: 10% Syccess", description: "Eating nickael reminds the baer of his best friend.", image: nickael },
    { title: "Saelmon", levelInfo: "Lvl 1: 5% Success", description: "Papa Baer always said saelmon made you smarter.", image: saelmon },
    { title: "Uraenium", levelInfo: "Lvl 1: 0.5% Success", description: "Just a little bite wouldn't hurt, right?", image: uraenium }
  ]
    return (
        <div>
          <Helmet>
                <style>{'body { background-color: white; }'}</style>
            </Helmet>
          <div className='border-leavesdark border-4 h-screen w-[60%] float-left'>
            <div ref = {clickRef}>{data.clicks}</div>
            <div onClick={() => handleClick()} className="font-default">BUTTON CLICKINGNSDIOFJSODIFJWOEIFJW</div>
          </div>
          <div className='flex flex-col border-4 border-leavesdark bg-wood'>
            <div className='border-4 border-leavesdark text-center bg-[#779025] font-default text-4xl'>
              Hunting
            </div>
           <UpgradeModule foods={foodList}/>
          </div>
        </div>
    );
}

export default App;