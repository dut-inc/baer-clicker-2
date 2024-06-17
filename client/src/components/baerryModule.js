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
    <div className="border-wood border-4 w-[100%] h-28 bg-[url('./assets/moduleBG.png')] bg-bottom bg-left bg-contain">
            <img className="float-left" src={woerm}/>
            <div className="float-right h-[100%]">
                <img className="w-40 relative top-30 float-left" src={basicBaer}/>
                <div className='border-wood border-l-4 float-right h-[100%] min-w-fit font-default bg-[#904B19] text-center'>
                    <h1 className='text-2xl'>{food.title}</h1>
                    <h2 className='text-base'>{food.levelInfo}</h2>
                    <p className='text-sm'>{food.description}</p>
                </div>
            </div>
        </div>
    );
}