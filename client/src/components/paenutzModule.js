import paenut from '../assets/paenut.png'
import basicBaer from '../assets/basicBaer.png'

export default function PaenutzModule(){
    return (
        <div className="border-wood border-4 w-[100%] h-28 bg-[url('./assets/moduleBG.png')] bg-bottom">
            <img className="relative top-6 right-28 float-left" src={paenut}/>
            <img className="w-40 relative bottom-2 left-[77px] float-left" src={basicBaer}/>
            <div className='border-wood border-l-4 w-[30%] float-right h-[100%] text-center font-default p-1 bg-[#904B19]'>
                <h1 className='text-2xl'>
                    Paenutz
                </h1>
                <h2 className='text-base'> 
                    Lvl 1: 25% Success
                </h2>
                <p className='text-sm'>
                    Laughably small, yet highly nutritious.
                </p>
            </div>
        </div>
    );
}