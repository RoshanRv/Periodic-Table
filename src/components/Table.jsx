import React,{useState,useEffect}from 'react'
import Element  from './Element'

const Table = ({allElements,tab,difficulty,setDifficulty,symbol,setScore,score}) => {
const [rand,setRand]=useState()
const [start,setStart]=useState(0)
const [end,setEnd]=useState(false)
const [replay,setReplay]=useState(false)
const [foundOnes,setFoundOnes]=useState([])
const [highscore,setHighscore]=useState([])

    useEffect(()=>{
        setHighscore(JSON.parse(localStorage.getItem('highscore')))
        console.log(highscore)
    },[])

    const stop = ()=>{
        setRand('')
        symbol.splice(0,symbol.length)
        setFoundOnes(e=>e.splice(0,e.length))
        allElements.forEach((data)=>{
            symbol.push(data.name)
        })
        setStart(0)

        if(highscore==undefined||highscore==null){
            console.log(score,highscore)

            localStorage.setItem('highscore',JSON.stringify(score))
            setHighscore(score)

        }else{
            if(score>highscore) {
                console.log(score,highscore)
                setHighscore(score)
                localStorage.setItem('highscore',JSON.stringify(score))
            }
        }
        setEnd(true)
        setReplay(true)
    }

    const getRandom=()=>{
        end&& setScore(0)
        var sym = Math.floor(Math.random()*(symbol.length-1))
        setRand(symbol[sym])
        symbol.splice(sym,1)
        setStart(1)
        setEnd(false)

        // setTotalCorrect(0)
        // if(totalCorrect==1)
        // console.log(symbol)
    }



  return (
    <section className='lg:w-[81rem] md:w-[45rem] w-[18rem] mx-auto mt-3'>
        <div className="flex justify-between">
            <div>{<Element tab={tab} setScore={setScore} setScore={setScore} setFoundOnes={setFoundOnes} foundOnes={foundOnes} getRand={getRandom} rand={rand} difficulty={difficulty} key={allElements[0]?.atomicNumber} data={allElements[0]} />}</div>

            {/* Game Difficulty  */}
            {!tab&&(<div className='fle'>
            {start==0&&<label className='text-[.7vw] md:text-lg mx-2'>Difficulty</label>}
            {start==0&&<select value={difficulty} onChange={(e)=>setDifficulty(e.target.value)} className='bg-transparent outline-0 border-b-2 border-black pb-2 text-[.7vw] md:text-lg mx-2'>
                    <option value={1}>Easy</option>
                    <option value={2}>Medium</option>
                    <option value={3}>Hard</option>
                </select>}
                {(start==0&&!replay)&&<button className="px-2 py-1 bg-gradient-to-tr from-[#d279ff] to-[#96e7ff] rounded-md border-2" onClick={()=>getRandom()}>Play!!</button>}
                {(start==0&&replay)&&<button className="px-2 py-1 bg-gradient-to-tr from-[#d279ff] to-[#96e7ff] rounded-md border-2" onClick={()=>getRandom()}>Play Again!!</button>}
                {start==1&&<button className="px-2 py-1 bg-gradient-to-tr from-[#d279ff] to-[#96e7ff] rounded-md border-2" onClick={()=>stop()}>Quit</button>}

            </div>)}

            <div className='items-end'>{<Element tab={tab} setScore={setScore} setScore={setScore} setFoundOnes={setFoundOnes} foundOnes={foundOnes} getRand={getRandom} rand={rand} difficulty={difficulty} key={allElements[1]?.atomicNumber} data={allElements[1]} />}</div>
        </div>
        <div className="flex justify-between">
            <div className="grid grid-cols-2">
                {allElements?.map((element,i)=>{
                    if(i==2 || i==3 || i==10 || i==11)return <Element tab={tab} setScore={setScore} setScore={setScore} setFoundOnes={setFoundOnes} foundOnes={foundOnes} getRand={getRandom} rand={rand} difficulty={difficulty} key={element.atomicNumber} data={element} 
                    />
                })}

                
            </div>
            {/*   LEGEND    */}
        {tab&&(<div className={`md:grid md:grid-cols-2 lg:grid-cols-3   hidden `}>
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
        </div>)}


                {!tab&&(<div className='text-center'>
                    <h1>{rand}</h1>
                    {(replay||start==1)&&<h1>Score:<span className={` font-bold ${score>0?'text-green-500':'text-red-600'}`}>{score}</span></h1>}
                    {(end&&highscore)&&<h1>Highscore:<span className={` font-bold ${highscore>0?'text-green-500':'text-red-600'}`}>{highscore}</span></h1>}
                </div>)}
        

            

            <div className="grid grid-cols-6">
                {allElements?.map((element,i)=>{
                    if((i>3 && i<10) || (i>11 && i<18))return <Element tab={tab} setScore={setScore} setScore={setScore} setFoundOnes={setFoundOnes} foundOnes={foundOnes} getRand={getRandom} rand={rand} difficulty={difficulty} key={element.atomicNumber} data={element} 
                    />
                })}
            </div>
        </div>

        <div className=" flex justify-between"><div className="grid eight">
        {allElements?.map((element,i)=>{ 
                if(i>17 && i<54)return <Element tab={tab} setScore={setScore} setScore={setScore} setFoundOnes={setFoundOnes} foundOnes={foundOnes} getRand={getRandom} rand={rand} difficulty={difficulty} key={element.atomicNumber} data={element} 
                />
                
            })}</div>
            </div>

        <div className="flex justify-between">
            <div className="grid grid-cols-2">
                {allElements?.map((element,i)=>{
                    if(i==54 || i==55 || i==86 || i==87)return <Element tab={tab} setScore={setScore} setScore={setScore} setFoundOnes={setFoundOnes} foundOnes={foundOnes} getRand={getRandom} rand={rand} difficulty={difficulty} key={element.atomicNumber} data={element} 
                    />
                })}
            </div>
            <div className='grid grid-cols-1 lg:w-[4.5rem] md:w-10 w-4  text-center items-center	'>
                <h1 className='text-[8px] md:text-[1.5rem]'>*</h1>
                <h1 className='text-[8px] md:text-[1.5rem]'>**</h1>
            </div>
            
            <div className="grid fifteen">
                {allElements?.map((element,i)=>{
                    if((i>70 && i<86) || (i>102 && i<118))return <Element tab={tab} setScore={setScore} setScore={setScore} setFoundOnes={setFoundOnes} foundOnes={foundOnes} getRand={getRandom} rand={rand} difficulty={difficulty} key={element.atomicNumber} data={element} 
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
                <h1 className='text-[8px] md:text-[1.5rem] '>*</h1>
                <h1 className='text-[8px] md:text-[1.5rem] '>**</h1>
            </div>
            <div className="grid fifteen">
                {allElements?.map((element,i)=>{
                    if((i>55 && i<71) || (i>87 && i<103))return <Element tab={tab} setScore={setScore} setScore={setScore} setFoundOnes={setFoundOnes} foundOnes={foundOnes} getRand={getRandom} rand={rand} difficulty={difficulty} key={element.atomicNumber} data={element} 
                    />
                })}
            </div>
        </div>

        {/*   LEGEND    */}
        {tab&&(<div className="grid grid-cols-3 w-full mt-2 md:hidden">
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
        </div>)}

        
    </section>
  )
}

export default Table