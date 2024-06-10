import saelmon from '../assets/saelmon.png'
import basicBaer from '../assets/basicBaer.png'

export default function SaelmonModule(){
    return (
        <div className="border-wood border-4 w-[100%] h-28 bg-[url('./assets/moduleBG.png')] bg-bottom">
            <img className="absolute top-84 right-[600px] float-left" src={saelmon}/>
            <img className="w-40 absolute bottom-[226px] right-[240px] float-left" src={basicBaer}/>
            <div className='border-wood border-l-4 w-[30%] float-right h-[100%] text-center font-default p-1 bg-[#904B19]'>
                <h1 className='text-2xl'>
                    Saelmon
                </h1>
                <h2 className='text-base'> 
                    Lvl 1: 10% Success
                </h2>
                <p className='text-sm'>
                    Papa Baer always said saelmon
                </p>
            </div>
        </div>
    );
}