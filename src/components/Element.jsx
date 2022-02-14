import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const Element = ({data}) => {

    const [showInfo,setShowInfo]=useState(false)

    const displayInfo = (e)=>{
        setShowInfo(true)
        console.log('red')
    }

    const hideInfo = (e)=>{
        setShowInfo(false)
        console.log('red')
    }

    if(data.atomicNumber == '103')data.groupBlock='actinoid'

    if(data.groupBlock=='nonmetal'){
        var color = 'rgba(255, 255, 0, 0.2)'
        var color2 = 'rgba(255, 255, 0, 0.5)'
    }
    else if(data.groupBlock=='alkali metal'){
        var color = 'rgba(225, 0, 0, 0.2)'
        var color2 = 'rgba(225, 0, 0, 0.5)'
    }
    if(data.groupBlock=='alkaline earth metal'){
        var color = 'rgba(64, 64, 225, 0.2)'
        var color2 = 'rgba(64, 64, 225, 0.5)'
    }
    if(data.groupBlock=='transition metal'){
        var color = 'rgba(0, 128, 225, 0.2)'
        var color2 = 'rgba(0, 128, 225, 0.5)'
    }
    if(data.groupBlock=='metal'){
        var color = 'rgba(0, 255, 0, 0.2)'
        var color2 = 'rgba(0, 255, 0, 0.5)'
    }
    if(data.groupBlock=='metalloid'){
        var color = 'rgba(140, 190, 0, 0.2)'
        var color2 = 'rgba(140, 190, 0, 0.5)'
    }
    if(data.groupBlock=='halogen'){
        var color = 'rgba(186, 92, 248, 0.2)'
        var color2 = 'rgba(186, 92, 248, 0.5)'
    }
    if(data.groupBlock=='noble gas'){
        var color = 'rgba(255, 152, 0, 0.2)'
        var color2 = 'rgba(255, 152, 0, 0.5)'
    }
    if(data.groupBlock=='post-transition metal'){
        var color = 'rgba(248, 92, 170, 0.2)'
        var color2 = 'rgba(248, 92, 170, 0.5)'
    }
    if(data.groupBlock=='lanthanoid'){
        var color = 'rgba(0, 255, 255, 0.2)'
        var color2 = 'rgba(0, 255, 255, 0.5)'
    }
    if(data.groupBlock=='actinoid'){
        var color = 'rgba(64, 255, 192, 0.2)'
        var color2 = 'rgba(64, 255, 192, 0.5)'
    }

  return (
      <div>
        <div className={`lg:py-1 md:w-10 lg:w-[4.5rem] w-4 text-center  hover:scale-125 transition-transform `} onClick={()=>displayInfo()} style={{background:`linear-gradient(110deg,${color},${color2})`}}>
            <p className='md:text-sm text-[6px]'>{data.atomicNumber}</p>
            <h1 className='lg:text-xl md:text-lg text-[8.5px] font-semi-bold'>{data.symbol}</h1>
            <h1 className='md:text-[.65vw] lg:block hidden p-1'>{data.name}</h1>
            {/* <h1 className='md:text-[.65vw] p-1'>{data.groupBlock}</h1> */}
            {/* <h1>{color}</h1> */}
        </div>

    {/*     INFO       */}
        <div className={`w-full h-full bg-white/60 top-0 left-0 ${showInfo?'scale-100':'scale-0 hidden'} transition-transform absolute flex items-center justify-center `}>
            <div className="relative bg-white p-4 md:px-6 lg:px-10 w-3/4 md:w-1/2 border-2 border-black">
                {/* <h1 className='p-2'>PROPERTIES</h1> */}
                <FontAwesomeIcon icon={faClose} className='absolute lg:top-6 top-1 lg:right-3 right-1 text-md md:text-2xl' onClick={()=>hideInfo()}/>
                <div className="p-2 text-center" style={{background:`linear-gradient(110deg,${color},${color2})`}}>
                    <p className=''>{data.atomicNumber}</p>
                    <h1 className='text-4xl p-1 font-semi-bold'>{data.symbol}</h1>
                    <h1 className='text-2xl p-1'>{data.name}</h1>
                    <h1 className='text-xl p-1 capitalize'>{data.groupBlock}</h1>
                </div >
                <div className='text-center flex flex-col lg:w-3/4  mx-auto pt-4'>
                    <div className="flex justify-between text-xs md:text-md lg:text-lg hover:bg-black/10 hover:scale-110 hover:shadow-lg p-1 transition-transform ">
                        <p>Atomic Mass</p>
                        <p>{data.atomicMass}</p>
                    </div>
                    <div className="flex justify-between text-xs md:text-md lg:text-lg hover:bg-black/10 hover:scale-110 hover:shadow-lg p-1 transition-transform">
                        <p>Electronic Configuration</p>
                        <p>{data.electronicConfiguration}</p>
                    </div>
                    <div className="flex justify-between text-xs md:text-md lg:text-lg hover:bg-black/10 hover:scale-110 hover:shadow-lg p-1 transition-transform">
                        <p>Electronegativity</p>
                        <p>{data.electronegativity}</p>
                    </div>
                    <div className="flex justify-between text-xs md:text-md lg:text-lg hover:bg-black/10 hover:scale-110 hover:shadow-lg p-1 transition-transform">
                        <p>Atomic Radius</p>
                        <p>{data.atomicRadius}</p>
                    </div>
                    <div className="flex justify-between text-xs md:text-md lg:text-lg hover:bg-black/10 hover:scale-110 hover:shadow-lg p-1 transition-transform">
                        <p>Ion Radius</p>
                        <p>{data.ionRadius}</p>
                    </div>
                    <div className="flex justify-between text-xs md:text-md lg:text-lg hover:bg-black/10 hover:scale-110 hover:shadow-lg p-1 transition-transform">
                        <p>Van Der Waals Radius</p>
                        <p>{data.vanDerWaalsRadius}</p>
                    </div>
                    <div className="flex justify-between text-xs md:text-md lg:text-lg hover:bg-black/10 hover:scale-110 hover:shadow-lg p-1 transition-transform">
                        <p>Ionization Energy</p>
                        <p>{data.ionizationEnergy}</p>
                    </div>
                    <div className="flex justify-between text-xs md:text-md lg:text-lg hover:bg-black/10 hover:scale-110 hover:shadow-lg p-1 transition-transform">
                        <p>Electron Affinity</p>
                        <p>{data.electronAffinity}</p>
                    </div>
                    <div className="flex justify-between text-xs md:text-md lg:text-lg hover:bg-black/10 hover:scale-110 hover:shadow-lg p-1 transition-transform">
                        <p>Oxidation States</p>
                        <p>{data.oxidationStates}</p>
                    </div>
                    <div className="flex justify-between text-xs md:text-md lg:text-lg hover:bg-black/10 hover:scale-110 hover:shadow-lg p-1 transition-transform">
                        <p className='capitalize'>Standard State</p>
                        <p className='capitalize'>{data.standardState}</p>
                    </div>
                    <div className="flex justify-between text-xs md:text-md lg:text-lg hover:bg-black/10 hover:scale-110 hover:shadow-lg p-1 transition-transform">
                        <p className='capitalize'>Bonding Type</p>
                        <p className='capitalize' >{data.bondingType}</p>
                    </div>
                    <div className="flex justify-between text-xs md:text-md lg:text-lg hover:bg-black/10 hover:scale-110 hover:shadow-lg p-1 transition-transform">
                        <p>Melting Point</p>
                        <p>{data.meltingPoint}</p>
                    </div>
                    <div className="flex justify-between text-xs md:text-md lg:text-lg hover:bg-black/10 hover:scale-110 hover:shadow-lg p-1 transition-transform">
                        <p>Boiling Point</p>
                        <p>{data.boilingPoint}</p>
                    </div>
                    <div className="flex justify-between text-xs md:text-md lg:text-lg hover:bg-black/10 hover:scale-110 hover:shadow-lg p-1 transition-transform">
                        <p>Density</p>
                        <p>{data.density}</p>
                    </div>
                    <div className="flex justify-between text-xs md:text-md lg:text-lg hover:bg-black/10 hover:scale-110 hover:shadow-lg p-1 transition-transform">
                        <p>Year Discovered</p>
                        <p>{data.yearDiscovered}</p>
                    </div>
                    <div className="flex justify-between text-xs md:text-md lg:text-lg hover:bg-black/10 hover:scale-110 hover:shadow-lg p-1 transition-transform">
                        <p>Block</p>
                        <p>{data.block}</p>
                    </div>
                    <div className="flex justify-between text-xs md:text-md lg:text-lg hover:bg-black/10 hover:scale-110 hover:shadow-lg p-1 transition-transform">
                        <p>Period</p>
                        <p>{data.period}</p>
                    </div>
                    <div className="flex justify-between text-xs md:text-md lg:text-lg hover:bg-black/10 hover:scale-110 hover:shadow-lg p-1 transition-transform">
                        <p>Group</p>
                        <p>{data.group}</p>
                    </div>
                </div>

            </div>
        </div>

        

    </div>
  )
}

export default Element