import React from 'react'
import { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const Element = ({data,tab,difficulty,rand,getRand,foundOnes,setFoundOnes,setScore}) => {

    const [showInfo,setShowInfo]=useState(false)
    const [isCorrect,setIsCorrect]=useState(0)

    const displayInfo = (e)=>{
        if(tab)
        {setShowInfo(true)
        console.log('red')}

        if(!tab && rand && isCorrect==0){
            if(data.name==rand){
                // setTotalCorrect(1)
                setFoundOnes(foundOnes.concat(data.name))
                setScore(e=>e+100)
                setIsCorrect(1)
                getRand()
            }else {
                setScore(e=>e-50)
                setIsCorrect(2)
            }
        }
    }

    useEffect(()=>{
        var found = false
        for(var i=0;i<foundOnes.length;i++){
            if(foundOnes[i]==data.name) found=true
        }
        if(!found) setIsCorrect(0)
    },[foundOnes,setFoundOnes])

    

    const hideInfo = (e)=>{
        if(tab){
        setShowInfo(false)
        console.log('red')
        }
    }

    if(data.atomicNumber == '103')data.groupBlock='actinoid'
var color3 = '#FF0000'

// if(data.groupBlock=='nonmetal'){
// 3   var color = '#FAFA37'5//     var color2 = 'rgba(255, 255, 0, 1)'
//0.7}
// else if(data.groupBlock=='alkali metal'){
// 3   var color = '#FF6EFF'5//     var color2 = 'rgba(225, 0, 0, 1)'
//0.7}
// if(data.groupBlock=='alkaline earth metal'){
// 3   var color = '#0066FF'5//     var color2 = 'rgba(64, 64, 225, 1)'
//0.7}
// if(data.groupBlock=='transition metal'){
// 3   var color = '#CCFF00'5//     var color2 = 'rgba(0, 128, 225, 1)'
//0.7}
// if(data.groupBlock=='metal'){
// 3   var color = '#32FF6A'5//     var color2 = 'rgba(0, 255, 0, 1)'
//0.7}
// if(data.groupBlock=='metalloid'){
// 3   var color = '#14FFEC'5//     var color2 = 'rgba(140, 190, 0, 1)'
//0.7}
// if(data.groupBlock=='halogen'){
// 3   var color = '#8F47B3'5//     var color2 = 'rgba(186, 92, 248, 1)'
//0.7}
// if(data.groupBlock=='noble gas'){
// 3   var color = '#DB91EF'5//     var color2 = 'rgba(255, 152, 0, 1)'
//0.7}
// if(data.groupBlock=='post-transition metal'){
// 3   var color = '#F8D568'5//     var color2 = 'rgba(248, 92, 170, 1)'
//0.7}
// if(data.groupBlock=='lanthanoid'){
// 3   var color = '#FD0E35'5//     var color2 = 'rgba(0, 255, 255, 1)'
//0.7}
// if(data.groupBlock=='actinoid'){
// 3   var color = '#FF9933'5//     var color2 = 'rgba(64, 255, 192, 1)'
//0.7}

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
//style={{background:tab&&`linear-gradient(110deg,${color},${color2})`}}
  return (
      <div>
        <div aria-disabled className={`lg:py-1 md:w-10 lg:w-[4.5rem] w-4 text-center ${isCorrect==0?`bg-slate-200`:isCorrect==1?'bg-emerald-400':isCorrect==2&&'bg-red-400'} hover:scale-125 transition-transform ${!tab&&'box-border border-[1px]  border-black'}`} onClick={()=>displayInfo()}style={{background:tab&&`linear-gradient(110deg,${color},${color2})`}}>
            <p className={`md:text-sm text-[6px] transition-all ${(!tab&&difficulty==3)&&'opacity-0'}`} >{data.atomicNumber}</p>
            <h1 className={`lg:text-xl md:text-lg text-[8.5px]  font-semi-bold ${(!tab&&difficulty>=2)&&'opacity-0'}`} >{data.symbol}</h1>
            <h1 className={`md:text-[.65vw] xl:text-[.50vw]  lg:block hidden p-1 ${(!tab)&&'opacity-0'} `} >{data.name}</h1>
            {/* <h1 className='md:text-[.65vw] p-1'>{data.groupBlock}</h1> */}
            {/* <h1>{color}</h1> */}
        </div>

    {/*     INFO       */}
        {tab&&(<div className={`w-full h-full bg-white/60 top-0 left-0 ${showInfo?'scale-100':'scale-0 hidden'} transition-transform absolute flex  justify-center py-2`}>
            <div className="relative bg-white p-4 md:px-6 h-max lg:px-10 w-11/12  md:w-1/2 border-2 border-black">
                {/* <h1 className='p-2'>PROPERTIES</h1> */}
                <FontAwesomeIcon icon={faClose} className='absolute lg:top-6 top-1 lg:right-3 right-2 text-md md:text-2xl' onClick={()=>hideInfo()}/>
                <div className="p-2  text-center" style={{background:`linear-gradient(110deg,${color},${color2})`}}>
                    <p className=''>{data.atomicNumber}</p>
                    <h1 className='text-4xl p-1 font-semi-bold'>{data.symbol}</h1>
                    <h1 className='text-2xl p-1'>{data.name}</h1>
                    <h1 className='text-xl p-1 capitalize'>{data.groupBlock}</h1>
                </div >
                <div className='text-center flex flex-col lg:w-3/4  mx-auto pt-4 '>
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
        </div>)}

        

    </div>
  )
}

export default Element