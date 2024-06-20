import basicBaer from '../assets/basicBaer.png'
import baerry from '../assets/baerry.png'
import gyaetch from '../assets/gyaetch.png'
import nickael from '../assets/nickael.png'
import paenut from '../assets/paenut.png'
import saelmon from '../assets/saelmon.png'
import uraenium from '../assets/uraenium.png'
import woerm from '../assets/woerm.png'

export default function BaerryModule({foods}){
    return (
        <div className="divide-y-4 divide-wood border-y-4 border-wood">
        {foods.map((food) => (
            createModule(food)
            ))}
        </div>
    );
}

function createModule(food){
    if(food.unlocked){
        return (
            <div className="flex border-wood">
            <div className='flex flex-col flex-wrap self-stretch border-wood border-x-4 font-default 
            bg-[#904B19] w-full place-content-center items-center text-center'>
                <h1 className='text-2xl'>{food.title}</h1>
                <h2 className='text-base'>{food.levelInfo}</h2>
                <p className='text-sm'>{food.description}</p>
            </div>
            <div className="flex align-end items-end bg-[url('./assets/moduleBG.png')] bg-bottom bg-cover bg-no-repeat w-full">
                <img className="shrink-1 max-h-[7dvh] object-scale-down" src={food.image}/>
                <img className="object-scale-down shrink-1 ml-auto" src={basicBaer}/>
            </div>
        </div>
        );
    }
    else {
        return (
            <div className="flex border-wood grayscale">
            <div className='flex flex-col flex-wrap self-stretch border-wood border-x-4 font-default 
            bg-[#904B19] w-full place-content-center items-center text-center'>
                <h1 className='text-2xl'>{food.title}</h1>
                <h2 className='text-base'>{food.levelInfo}</h2>
                <p className='text-sm'>{food.description}</p>
            </div>
            <div className="flex align-end items-end bg-[url('./assets/moduleBG.png')] bg-bottom bg-cover bg-no-repeat w-full">
                <img className="shrink-1 max-h-[7dvh] object-scale-down" src={food.image}/>
                <img className="object-scale-down shrink-1 ml-auto" src={basicBaer}/>
            </div>
        </div>
        );
    }
}