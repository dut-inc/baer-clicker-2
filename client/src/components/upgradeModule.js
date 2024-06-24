import basicBaer from '../assets/basicBaer.png'
import baerry from '../assets/baerry.png'
import gyaetch from '../assets/gyaetch.png'
import nickael from '../assets/nickael.png'
import paenut from '../assets/paenut.png'
import saelmon from '../assets/saelmon.png'
import uraenium from '../assets/uraenium.png'
import woerm from '../assets/woerm.png'

export default function BaerryModule({foods}){
    const lastItemUnlocked = {
        true: "divide-y-4 divide-wood border-y-4 border-wood",
        false: "divide-y-4 divide-wood border-y-4 border-t-wood border-b-[#474747]"
    }
    return (
        //use class name from lastItemUnlocked const depending on unlocked or not
        <div className={`${lastItemUnlocked[foods[foods.length-1].unlocked]}`}>
        {foods.map((food) => (
            createModule(food)
            ))}
        </div>
    );
}

function createModule(food){
    const grayscaleModule = {
        true: 'flex border-wood',
        false: 'flex border-wood grayscale'
    }
    return (
        <div className={`${grayscaleModule[food.unlocked]}`}>
        <div className='flex flex-col flex-wrap self-stretch border-wood border-x-4 font-default 
        bg-[#904B19] w-full text-center'>
            <h1 className='text-2xl'>{food.title}</h1>
            <h2 className='text-base'>{food.levelInfo}</h2>
            <p className='text-sm'>{food.description}</p>
        </div>
        <div className="flex justify-center items-end bg-[url('./assets/moduleBG.png')] bg-bottom bg-cover bg-no-repeat w-full">
            <img className="max-h-[15dvh] object-scale-down" src={food.image}/>
            {/* <img className="object-scale-down ml-auto" src={basicBaer}/> */}
        </div>
    </div>
    );
}