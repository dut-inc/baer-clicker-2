import { useState } from 'react';
import baerry from '../assets/baerry.png'
import gyaetch from '../assets/gyaetch.png'
import nickael from '../assets/nickael.png'
import paenut from '../assets/paenut.png'
import saelmon from '../assets/saelmon.png'
import uraenium from '../assets/uraenium.png'
import woerm from '../assets/woerm.png'


export default function UpgradeModule({foods, data, setData}){

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let moduleArr = []
    for (let [title, food] of foods) {
        moduleArr.push(createModule(title, food))
    }
    return (
        <div className="border-wood border-t-4">
            {moduleArr}
        </div>
    );


    function buyUpgrade(evt) {
        //get mouse target module name
        const id = evt.currentTarget.id
            if (foods.has(id)) {
                let food = foods.get(id)
                //deny if not enough calories
                if (data.clicks <= food.cost || id === "Woerm") {
                    console.log(evt.currentTarget.classList)
                    let current = evt.currentTarget.classList
                    current.add("animate-wiggle", "opacity-25")
                    sleep(100).then(() => {current.remove("animate-wiggle", "opacity-25")})
                    return
                }
                //decrease clicks
                setData({clicks: (data.clicks -= food.cost)})
                //linear scaling, should change
                food.level += 1
                food.chance += food.baseChance*0.1
                food.cost += food.baseCost*0.1
                food.unlocked = true
            }

    }

    

    function createModule(title, food){
        return (
            <div className="bg-[#F3170D] flex border-wood upgradeModule"
                id={`${title}`} 
                onClick={(evt) => {buyUpgrade(evt)}}
                >
                <div className={`${food.buyable ? "" : "grayscale"} flex flex-col flex-wrap self-stretch border-wood border-x-4 font-default 
                bg-[#904B19] w-full text-center select-none h-min-[6rem] border-b-4`}>
                    <h1 className='text-2xl'>{title} ({food.value})</h1>
                    <h2 className='text-base'>Lvl {food.level}: {food.chance}% Success Rate</h2>
                    <p className='text-sm'>{food.description}</p>
                </div>
                <div className={`${food.unlocked ? "" : "grayscale"} flex justify-center items-end bg-[url('./assets/moduleBG.png')] bg-bottom 
                bg-cover bg-no-repeat w-full border-b-4 border-wood`}>
                    <img className="max-h-[9dvh] object-scale-down" src={food.image}/>
                    {/* <img className="object-scale-down ml-auto" src={basicBaer}/> */}
                </div>
            </div>
        )
    }
}

