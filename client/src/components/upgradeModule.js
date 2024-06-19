import baerry from '../assets/baerry.png'
import basicBaer from '../assets/basicBaer.png'
import gyaetch from '../assets/gyaetch.png'
import nickael from '../assets/nickael.png'
import paenut from '../assets/paenut.png'
import saelmon from '../assets/saelmon.png'
import uraenium from '../assets/uraenium.png'
import woerm from '../assets/woerm.png'

export default function BaerryModule({foods}){
    return (
        <div>
        {foods.map((food) => (
            createModule(food)
            ))}
        </div>
    );
}

function createModule(food){
    return (
    <div className="flex justify-end border-wood border-4 h-28 bg-[url('./assets/moduleBG.png')] bg-bottom bg-left bg-contain">
            <img className="" src={woerm}/>
            <img className="ml-auto" src={basicBaer}/>
            <div className='flex flex-col shrink-1 border-wood border-l-4 h-[100%] font-default bg-[#904B19] text-center'>
                <h1 className='text-2xl'>{food.title}</h1>
                <h2 className='text-base'>{food.levelInfo}</h2>
                <p className='text-sm'>{food.description}</p>
            </div>
        </div>
    );
}