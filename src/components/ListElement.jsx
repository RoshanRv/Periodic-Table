import React from 'react'
import { useState } from 'react'

const ListElement = ({data}) => {

    const [moreDetails,setMoreDetails]=useState(false)

    if(data.atomicNumber == '103')data.groupBlock='actinoid'


    if(data.groupBlock=='nonmetal'){
        var color = '#ffffcc'
        var color2 = ' #ffff1a '
    }
    else if(data.groupBlock=='alkali metal'){
        var color = '#ff9999'
        var color2 = '#ff1a1a'
    }
    if(data.groupBlock=='alkaline earth metal'){
        var color = '#80b3ff'
        var color2 = '#0066ff'
    }
    if(data.groupBlock=='transition metal'){
        var color = '#99e6ff'
        var color2 = '#00bfff'
    }
    if(data.groupBlock=='metal'){
        var color = '#b3ffb3'
        var color2 = '#00ff00'
    }
    if(data.groupBlock=='metalloid'){
        var color = '#e6ffb3'
        var color2 = '#b3ff1a'
    }
    if(data.groupBlock=='halogen'){
        var color = '#f2ccff'
        var color2 = '#d24dff'
    }
    if(data.groupBlock=='noble gas'){
        var color = '#ffcc99'
        var color2 = '#ff9933'
    }
    if(data.groupBlock=='post-transition metal'){
        var color = '#ffb3ff'
        var color2 = '#ff80ff'
    }
    if(data.groupBlock=='lanthanoid'){
        var color = '#b3ffff'
        var color2 = '#00e6e6'
    }
    if(data.groupBlock=='actinoid'){
        var color = '#ccfff5'
        var color2 = '#4dffdb'
    }

  return (
    <div className={`bg-white md:p-4 p-2 md:w-3/4 mx-auto transition-all ${moreDetails?'max-h-[54rem]':'md:max-h-44 max-h-[7.65rem]'} relative rounded-xl my-1 shadow-md cursor-pointer`}>
        {data.symbol&&<div className='grid grid-cols-2 rounded-xl shadow-lg font-bold items-baseline place-content-start  relative px-3 py-3' onClick={()=>setMoreDetails(!moreDetails)}  style={{background:`linear-gradient(110deg,${color},${color2})`}}>
        <h1 className='md:text-7xl text-3xl place-self-start	' >{data.symbol}</h1>
        <h1 className='md:text-4xl text-xl place-self-end' >{data.atomicNumber}</h1>
        <h1 className='md:text-2xl text-lg py-2 place-self-start'>{data.name}</h1>
        <h1 className='md:text-2xl text-xs  py-2 capitalize place-self-end'>{data.groupBlock}</h1>
        </div>}
        {/*  ERROR */}
        {data.errorCode&&<h1 className='text-md md:text-2xl'>Searched Term is Not Found :(</h1>}

        {data.symbol&&<div className={`transition-all rounded-lg mt-4 shadow-lg	 ${moreDetails?'delay-[120ms]':' opacity-0 '}`} style={{background:`linear-gradient(110deg,${color},${color2})`}}>

            <div className="flex justify-between text-xs md:text-md lg:text-lg  p-1 px-2 transition-transform ">
                <p>Atomic Mass</p>
                <p>{data.atomicMass}</p>
            </div>
            <div className="flex justify-between text-xs md:text-md lg:text-lg  p-1 px-2 transition-transform">
                <p>Electronic Configuration</p>
                <p>{data.electronicConfiguration}</p>
            </div>
            <div className="flex justify-between text-xs md:text-md lg:text-lg  p-1 px-2 transition-transform">
                <p>Electronegativity</p>
                <p>{data.electronegativity}</p>
            </div>
            <div className="flex justify-between text-xs md:text-md lg:text-lg  p-1 px-2 transition-transform">
                <p>Atomic Radius</p>
                <p>{data.atomicRadius}</p>
            </div>
            <div className="flex justify-between text-xs md:text-md lg:text-lg  p-1 px-2 transition-transform">
                <p>Ion Radius</p>
                <p>{data.ionRadius}</p>
            </div>
            <div className="flex justify-between text-xs md:text-md lg:text-lg  p-1 px-2 transition-transform">
                <p>Van Der Waals Radius</p>
                <p>{data.vanDerWaalsRadius}</p>
            </div>
            <div className="flex justify-between text-xs md:text-md lg:text-lg  p-1 px-2 transition-transform">
                <p>Ionization Energy</p>
                <p>{data.ionizationEnergy}</p>
            </div>
            <div className="flex justify-between text-xs md:text-md lg:text-lg  p-1 px-2 transition-transform">
                <p>Electron Affinity</p>
                <p>{data.electronAffinity}</p>
            </div>
            <div className="flex justify-between text-xs md:text-md lg:text-lg  p-1 px-2 transition-transform">
                <p>Oxidation States</p>
                <p>{data.oxidationStates}</p>
            </div>
            <div className="flex justify-between text-xs md:text-md lg:text-lg  p-1 px-2 transition-transform">
                <p className='capitalize'>Standard State</p>
                <p className='capitalize'>{data.standardState}</p>
            </div>
            <div className="flex justify-between text-xs md:text-md lg:text-lg  p-1 px-2 transition-transform">
                <p className='capitalize'>Bonding Type</p>
                <p className='capitalize' >{data.bondingType}</p>
            </div>
            <div className="flex justify-between text-xs md:text-md lg:text-lg  p-1 px-2 transition-transform">
                <p>Melting Point</p>
                <p>{data.meltingPoint}</p>
            </div>
            <div className="flex justify-between text-xs md:text-md lg:text-lg  p-1 px-2 transition-transform">
                <p>Boiling Point</p>
                <p>{data.boilingPoint}</p>
            </div>
            <div className="flex justify-between text-xs md:text-md lg:text-lg  p-1 px-2 transition-transform">
                <p>Density</p>
                <p>{data.density}</p>
            </div>
            <div className="flex justify-between text-xs md:text-md lg:text-lg  p-1 px-2 transition-transform">
                <p>Year Discovered</p>
                <p>{data.yearDiscovered}</p>
            </div>
            <div className="flex justify-between text-xs md:text-md lg:text-lg  p-1 px-2 transition-transform">
                <p>Block</p>
                <p>{data.block}</p>
            </div>
            <div className="flex justify-between text-xs md:text-md lg:text-lg  p-1 px-2 transition-transform">
                <p>Period</p>
                <p>{data.period}</p>
            </div>
            <div className="flex justify-between text-xs md:text-md lg:text-lg  p-1 px-2 transition-transform">
                <p>Group</p>
                <p>{data.group}</p>
            </div>
            
        </div>}

    </div>
  )
}

export default ListElement