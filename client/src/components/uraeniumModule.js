import uraenium from '../assets/uraenium.png'
import basicBaer from '../assets/basicBaer.png'

export default function UraeniumModule(){
    return (
        <div className="border-wood border-[3px] w-[100%] h-28 bg-[url('./assets/moduleBG.png')] bg-bottom grayscale">
            <img className="relative top-3 float-left w-[10%]" src={uraenium}/>
            <img className="w-40 float-left" src={basicBaer}/>
            <div className='border-wood border-l-[3px] w-[30%] float-right h-[100%] text-center font-default p-1 bg-[#904B19]'>
                <h1 className='text-2xl'>
                    Uraenium
                </h1>
                <h2 className='text-base'> 
                    Lvl 1: 0.5% Success
                </h2>
                <p className='text-sm italic'>
                    Just a little munch wouldn't hurt, right?
                </p>
            </div>
        </div>
    );
}