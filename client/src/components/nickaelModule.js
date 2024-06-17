import nickael from '../assets/nickael.png'
import basicBaer from '../assets/basicBaer.png'

export default function NickaelModule(){
    return (
        <div className="border-wood border-[3px] w-[100%] h-28 bg-[url('./assets/moduleBG.png')] bg-bottom grayscale">
            <img className="relative top-3 float-left" src={nickael}/>
            <img className="w-40 float-left" src={basicBaer}/>
            <div className='border-wood border-l-[3px] w-[30%] float-right h-[100%] text-center font-default p-1 bg-[#904B19]'>
                <h1 className='text-2xl'>
                    Nickael
                </h1>
                <h2 className='text-base'> 
                    Lvl 1: 5% Success
                </h2>
                <p className='text-sm italic'>
                    Eating nickael reminds the baer of his best friend.
                </p>
            </div>
        </div>
    );
}