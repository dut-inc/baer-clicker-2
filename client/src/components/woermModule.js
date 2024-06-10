import woerm from '../assets/woerm.png'
import basicBaer from '../assets/basicBaer.png'

export default function WoermModule(){
    return (
        <div className="border-wood border-4 w-[100%] h-28 bg-[url('./assets/moduleBG.png')] bg-bottom">
            <img className="relative top-6 float-left" src={woerm}/>
            <img className="w-40 absolute top-12 right-[240px] float-left" src={basicBaer}/>
            <div className='border-wood border-l-4 w-[30%] float-right h-[100%] text-center font-default p-1 bg-[#904B19]'>
                <h1 className='text-2xl'>
                    Woerm
                </h1>
                <h2 className='text-base'> 
                    Lvl 1: 100% Success
                </h2>
                <p className='text-sm'>
                    Not much, but it'll have to do for now...
                </p>
            </div>
        </div>
    );
}