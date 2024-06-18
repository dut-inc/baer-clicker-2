import woerm from '../assets/woerm.png'
import basicBaer from '../assets/basicBaer.png'

export default function BaerryModule({foods}){
    return (
        <div>
        {foods.map((food) => (
            createModule(food)
            ))}
        </div>
    );
}

function createModule(food) {
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