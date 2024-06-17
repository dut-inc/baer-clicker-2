import baerry from '../assets/baerry.png'
import basicBaer from '../assets/basicBaer.png'

export default function BaerryModule(){
    return (
        <div className="border-wood border-[3px] w-[100%] h-28 bg-[url('./assets/moduleBG.png')] bg-bottom grayscale">
            <img className="relative top-3 right-64 float-left" src={baerry}/>
            <img className="w-40 right-56 fixed float-left" src={basicBaer}/>
            <div className='border-wood border-l-[3px] w-[30%] float-right h-[100%] text-center font-default p-1 bg-[#904B19]'>
                <h1 className='text-2xl'>
                    Baerry
                </h1>
                <h2 className='text-base'> 
                    Lvl 1: 50% Success
                </h2>
                <p className='text-sm italic'>
                    The basic source of any strong baer's nutrition.
                </p>
            </div>
        </div>
    );
}