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
import { useNavigate } from 'react-router-dom'

function App() {
  let [data, setData] = useState({});
  let [user, setUser] = useState()
  const clickRef = useRef(0) // keeps track of clicks displayed
  const navigate = useNavigate();
  let [foodList, setFoodList] = useState([
    { title: "Woerm", level: 1, value: 1, chance: 100, cost: 10, baseValue: 1, baseChance: 100, baseCost: 10, description: "Not much, but it'll have to do for now...", 
    image: woerm, unlocked: true  },
    { title: "Baerry", level: 1, value: 5, chance: 50, cost: 50, baseValue: 5, baseChance: 50, baseCost: 50, description: "The basic source of any strong baer's nutrition.", 
    image: baerry, unlocked: true },
    { title: "Paenutz", level: 1, value: 10, chance: 25, cost: 100, baseValue: 10, baseChance: 25, baseCost: 100, description: "Laughably small, yet highly nutritious.", 
    image: paenut, unlocked: false }, 
    { title: "Gyaetch", level: 1, value: 20, chance: 15, cost: 200, baseValue: 20, baseChance: 15, baseCost: 200, description: "Have you seen Yinlin bro oh my lord", 
    image: gyaetch, unlocked: false },
    { title: "Nickael", level: 1, value: 50, chance: 10, cost: 500, baseValue: 50, baseChance: 10, baseCost: 500, description: "Eating nickael reminds the baer of his best friend.", 
    image: nickael, unlocked: false },
    { title: "Saelmon", level: 1, value: 100, chance: 5, cost: 1000, baseValue: 100, baseChance: 5, baseCost: 1000, description: "Papa Baer always said saelmon made you smarter.", 
    image: saelmon, unlocked: false },
    { title: "Uraenium", level: 1, value: 250, chance: 0.5, cost: 2500, baseValue: 250, baseChance: 0.5, baseCost: 2500, description: "Just a little bite wouldn't hurt, right?", 
    image: uraenium, unlocked: false }
  ])
  // !check auth
  // useEffect(() => {
  //   const user = localStorage.getItem("user")
  //   if (user) {
  //     setUser(user)
  //   }
  //   else {
  //     navigate("/login")
  //   }
  // })
  // !

  const getInitialData = async () => {
    try {
      const user = localStorage.getItem('user')
      console.log("GETTING INITIAL DATA")
      const response = await fetch(`http://127.0.0.1:3001/?user=${user}`, { 
        method: "GET",
        //!uncomment with no extension
        // credentials: 'include', 
        // mode: "cors"
      })
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

  useEffect(() => { // update to server every set interval

    console.log(`initializing interval`);
    const user = localStorage.getItem('user')
    const interval = setInterval(async () => {
      console.log(clickRef.current.textContent)
      const response = await fetch('http://127.0.0.1:3001/click', {
        method: "post",
        headers: {
          //!uncomment with extension
          'Content-Type': 'application/json', 
          // 'Access-Control-Allow-Origin':'*'
        },
        //!uncomment with extension
        // mode: "cors",
        // credentials: 'include', 
        body: JSON.stringify({ user, clicks: clickRef.current.textContent })
      })
    }, 3000); // 1000 is 1 second
  
    return () => {
      console.log(`clearing interval`);
      clearInterval(interval);
    };
  }, []); 

  useEffect(() => {
    if (data.clicks) {
      setData({clicks: data.clicks})
    }
  }, [data.clicks])

  const handleClick = () => {
    huntResult()
  }

  const huntResult = () => {
    if (!data.clicks) {
      setData({clicks: data.clicks})
      console.log("clicks updated")
    }
    foodList.forEach(food => {
      let chance = food.chance
      let rand = Math.random()*100
      //increase clicks by every 100% then random for extra
      setData({clicks: (data.clicks += food.value*(Math.trunc(chance/100) + (chance%100 >= rand ? 1 : 0)))})
    })
  }

    return (
        <div>
          <Helmet>
                <style>{'body { background-color: white; }'}</style>
            </Helmet>
          <div className='border-leavesdark border-4 h-screen w-[60%] float-left bg-[url("./assets/clickerBG.png")] bg-cover bg-bottom bg-no-repeat'>
            <div ref = {clickRef}>{data.clicks}</div>
            <img class="object-contain h-48 w-96 bg-white shadow rounded-lg" src="link" alt="dynamic button" onClick={() => handleClick()}/>
          </div>
          <div className='flex flex-col border-4 border-leavesdark bg-wood h-screen overflow-y-auto overflow-hidden'>
            <div className='border-4 border-leavesdark text-center bg-[#779025] font-default text-4xl'>
              Hunting
            </div>
           <UpgradeModule foods={foodList} data={data} setData={setData}/>
          </div>
        </div>
    );
}

export default App;