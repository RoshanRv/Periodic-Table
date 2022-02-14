import React from 'react'
import Element from './Element'

const Table = ({allElements}) => {
  return (
    <section className='lg:w-[81rem] md:w-[45rem] w-[18rem] mx-auto '>
        <div className="flex justify-between">
            <div>{<Element key={allElements[0]?.atomicNumber} data={allElements[0]} />}</div>
            <div className='items-end'>{<Element key={allElements[1]?.atomicNumber} data={allElements[1]} />}</div>
        </div>
        <div className="flex justify-between">
            <div className="grid grid-cols-2">
                {allElements?.map((element,i)=>{
                    if(i==2 || i==3 || i==10 || i==11)return <Element key={element.atomicNumber} data={element} 
                    />
                })}
            </div>
            {/*   LEGEND    */}
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3   hidden ">
            <div className='flex items-center w-max'>
                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-yellow-200 border-2 border-black"></div>
                <p className='px-2 text-xs lg:text-md '>Non Metals</p>
            </div>
            <div className='flex items-center w-max'>
                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-red-400 border-2 border-black"></div>
                <p className='px-2 text-xs lg:text-md'>Alkali Metals</p>
            </div>
            <div className='flex items-center w-max'>
                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-violet-400 border-2 border-black"></div>
                <p className='px-2 text-xs lg:text-md'>Alkaline Earth Metals</p>
            </div>
            <div className='flex items-center'>
                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-blue-400 border-2 border-black"></div>
                <p className='px-2 text-xs lg:text-md'>Transitional Metals</p>
            </div>
            <div className='flex items-center'>
                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-green-300 border-2 border-black"></div>
                <p className='px-2 text-xs lg:text-md'>Post Transitional Metals</p>
            </div>
            <div className='flex items-center'>
                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-orange-300 border-2 border-black"></div>
                <p className='px-2 text-xs lg:text-md'>Noble Gases</p>
            </div>
            <div className='flex items-center'>
                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-cyan-300 border-2 border-black"></div>
                <p className='px-2 text-xs lg:text-md'>Lanthanide</p>
            </div>
            <div className='flex items-center'>
                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-sky-300 border-2 border-black"></div>
                <p className='px-2 text-xs lg:text-md'>Actinide</p>
            </div>
            <div className='flex items-center'>
                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-pink-300 border-2 border-black"></div>
                <p className='px-2 text-xs lg:text-md'>Post-Transition Metals</p>
            </div>
            <div className='flex items-center'>
                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-purple-300 border-2 border-black"></div>
                <p className='px-2 text-xs lg:text-md'>Halogen</p>
            </div>
            <div className='flex items-center'>
                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-lime-300 border-2 border-black"></div>
                <p className='px-2 text-xs lg:text-md'>Metalloid</p>
            </div>
        </div>
            <div className="grid grid-cols-6">
                {allElements?.map((element,i)=>{
                    if((i>3 && i<10) || (i>11 && i<18))return <Element key={element.atomicNumber} data={element} 
                    />
                })}
            </div>
        </div>

        <div className=" flex justify-between"><div className="grid eight">
        {allElements?.map((element,i)=>{ 
                if(i>17 && i<54)return <Element key={element.atomicNumber} data={element} 
                />
                
            })}</div>
            </div>

        <div className="flex justify-between">
            <div className="grid grid-cols-2">
                {allElements?.map((element,i)=>{
                    if(i==54 || i==55 || i==86 || i==87)return <Element key={element.atomicNumber} data={element} 
                    />
                })}
            </div>
            <div className='grid grid-cols-1 lg:w-[4.5rem] md:w-10 w-4  text-center items-center	'>
                <h1 className='text-[8px] md:text-1'>*</h1>
                <h1 className='text-[8px] md:text-1'>**</h1>
            </div>
            
            <div className="grid fifteen">
                {allElements?.map((element,i)=>{
                    if((i>70 && i<86) || (i>102 && i<118))return <Element key={element.atomicNumber} data={element} 
                    />
                })}
            </div>
        </div>
        {/* Radio Actives... */}
        <div className="flex justify-between mt-2">
            <div className="grid grid-cols-2">
                <div className='p-2  lg:w-[4.5rem] md:w-10 w-4'></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='grid gird-cols-1 lg:w-[4.5rem] md:w-10 w-4 text-right p-2 items-center'>
                <h1 className='text-[8px] md:text-2'>*</h1>
                <h1 className='text-[8px] md:text-2'>**</h1>
            </div>
            <div className="grid fifteen">
                {allElements?.map((element,i)=>{
                    if((i>55 && i<71) || (i>87 && i<103))return <Element key={element.atomicNumber} data={element} 
                    />
                })}
            </div>
        </div>

        {/*   LEGEND    */}
        <div className="grid grid-cols-3 w-full mt-2 md:hidden">
            <div className='flex items-center'>
                <div className="w-3 h-3 bg-yellow-200 border-2 border-black"></div>
                <p className='px-2 text-[8px] pb-1 '>Non Metals</p>
            </div>
            <div className='flex items-center'>
                <div className="w-3 h-3 bg-red-400 border-2 border-black"></div>
                <p className='px-2 text-[8px] pb-1'>Alkali Metals</p>
            </div>
            <div className='flex items-center'>
                <div className="w-3 h-3 bg-violet-400 border-2 border-black"></div>
                <p className='px-2 text-[8px] pb-1'>Alkaline Earth Metals</p>
            </div>
            <div className='flex items-center'>
                <div className="w-3 h-3 bg-blue-400 border-2 border-black"></div>
                <p className='px-2 text-[8px] pb-1'>Transitional Metals</p>
            </div>
            <div className='flex items-center'>
                <div className="w-3 h-3 bg-green-300 border-2 border-black"></div>
                <p className='px-2 text-[8px] pb-1'>Post Transitional Metals</p>
            </div>
            <div className='flex items-center'>
                <div className="w-3 h-3 bg-orange-300 border-2 border-black"></div>
                <p className='px-2 text-[8px] pb-1'>Noble Gases</p>
            </div>
            <div className='flex items-center'>
                <div className="w-3 h-3 bg-cyan-300 border-2 border-black"></div>
                <p className='px-2 text-[8px] pb-1'>Lanthanide</p>
            </div>
            <div className='flex items-center'>
                <div className="w-3 h-3 bg-sky-300 border-2 border-black"></div>
                <p className='px-2 text-[8px] pb-1'>Actinide</p>
            </div>
            <div className='flex items-center'>
                <div className="w-3 h-3 bg-pink-300 border-2 border-black"></div>
                <p className='px-2 text-[8px] pb-1'>Post-Transition Metals</p>
            </div>
            <div className='flex items-center'>
                <div className="w-3 h-3 bg-purple-300 border-2 border-black"></div>
                <p className='px-2 text-[8px] pb-1'>Halogen</p>
            </div>
            <div className='flex items-center'>
                <div className="w-3 h-3 bg-lime-300 border-2 border-black"></div>
                <p className='px-2 text-[8px] pb-1'>Metalloid</p>
            </div>
        </div>

        
    </section>
  )
}

export default Table