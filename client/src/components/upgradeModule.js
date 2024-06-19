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
    return (
    <div className="flex items-end justify-stretch border-wood bg-[url('./assets/moduleBG.png')] bg-[bottom_left_45dvh] bg-cover bg-no-repeat">
            <div className='flex flex-col flex-wrap self-stretch border-wood border-x-4 font-default bg-[#904B19] text-center w-[60%]'>
                <h1 className='text-2xl'>{food.title}</h1>
                <h2 className='text-base'>{food.levelInfo}</h2>
                <p className='text-sm'>{food.description}</p>
            </div>
            <img className="max-h-[7dvh] object-scale-down" src={food.image}/>
            <img className="object-scale-down ml-auto" src={basicBaer}/>
        </div>
    );
}