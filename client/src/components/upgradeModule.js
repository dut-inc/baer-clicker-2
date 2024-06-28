import { useState } from 'react';
import baerry from '../assets/baerry.png'
import gyaetch from '../assets/gyaetch.png'
import nickael from '../assets/nickael.png'
import paenut from '../assets/paenut.png'
import saelmon from '../assets/saelmon.png'
import uraenium from '../assets/uraenium.png'
import woerm from '../assets/woerm.png'


export default function BaerryModule({foods, data, setData}){
    const lastItemUnlocked = {
        true: "divide-y-4 divide-wood border-y-4 border-wood",
        false: "divide-y-4 divide-wood border-y-4 border-t-wood border-b-[#474747]"
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return (
        //grayscale last border if locked
        <div className={`${lastItemUnlocked[foods[foods.length-1].unlocked]}`}>
        {foods.map((food) => (
            createModule(food)
            ))}
        </div>
    );


    function buyUpgrade(evt) {
        //get mouse target module name
        const id = evt.currentTarget.id
        if (id == "Woerm") {
            return;
        }
        let tempList = foods

        //loop through and find id in list
        tempList.forEach((food) => {
            if (food.title === id) {
                //check if user has enough calories
                if (data.clicks <= food.cost) {
                    console.log(evt.currentTarget.classList)
                    let current = evt.currentTarget.classList
                    current.add("animate-wiggle")
                    sleep(100).then(() => {current.remove("animate-wiggle")})
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
        })
    }

    

    function createModule(food){
        const grayscaleModule = {
            true: 'flex border-wood upgradeModule',
            false: 'flex border-wood grayscale upgradeModule'
        }
        console.log('created module')
        return (
            <div className={`${grayscaleModule[food.unlocked]}`} 
                id={`${food.title}`} 
                onClick={(evt) => {buyUpgrade(evt)}}
                // onAnimationEnd={function(){this.classList.remove('animate-wiggle')}}
                >
                <div className='flex flex-col flex-wrap self-stretch border-wood border-x-4 font-default 
                bg-[#904B19] w-full text-center select-none'>
                    <h1 className='text-2xl'>{food.title} ({food.value})</h1>
                    <h2 className='text-base'>Lvl {food.level}: {food.chance}% Success Rate</h2>
                    <p className='text-sm'>{food.description}</p>
                </div>
                <div className="flex justify-center items-end bg-[url('./assets/moduleBG.png')] bg-bottom bg-cover bg-no-repeat w-full">
                    <img className="max-h-[9dvh] object-scale-down" src={food.image}/>
                    {/* <img className="object-scale-down ml-auto" src={basicBaer}/> */}
                </div>
            </div>
        )
    }
}

