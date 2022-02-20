import React from 'react'
import { useState,useEffect } from 'react'
import fetchAllElements from '../Api'
import ListElement from './ListElement'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const List = () => {
    const [filter,setFilter]=useState('atomicNumber')
    const [search,setSearch]=useState('')
    const [listData,setlistData]=useState('')
    const [isFetching,setIsFetching]=useState(false)
    const [element,setElement]=useState('element')
    const [error,setError]=useState(false)

    


    useEffect(()=>{
        if(filter=='type') setSearch('post-transition metal')
        else if(filter=='block') setSearch('s')
        else if(filter=='state') setSearch('solid')
        else if(filter=='bondingType') setSearch('atomic')
        else setSearch('')

        if(filter=='atomicNumber'||filter=='atomicName'||filter=='symbol')setElement('element')
        else setElement('elements')

        

    },[filter])

    const fetchListData=()=>{
        setIsFetching(true)
        setError(false)

        if(filter=='symbol'){
            
            let arr = search.toLowerCase().split('')
            arr[0] = arr[0].toUpperCase()
            arr=arr.join('')
            console.log(arr)
            setSearch(arr)

            fetchAllElements(setIsFetching,filter,arr,element,setError)
        .then((resp)=>{
            setlistData(resp)
            setIsFetching(false)
        })
        }else{

            fetchAllElements(setIsFetching,filter,search,element,setError)
        .then((resp)=>{
            setlistData(resp)
            setIsFetching(false)

        })

        }

        
    }

  return (
    <section className='mt-16 mx-auto p-2 md:p-4  text-center'>
        <div className='font-head shadow-lg border-y-2 py-2 md:text-4xl mb-4 bg-black/20 text-white txt'>
            <h1>Search</h1>
        </div>

        <div className="grid grid-cols-3 gap-y-2  mx-auto">

        {/*             Filter                   */}
        <div className='col-span-3 md:col-span-1'>
            <select  value={filter} onChange={(e)=>setFilter(e.target.value)}  className='bg-transparent outline-0 pb-1 border-b-2  text-sm md:text-lg p-2 mx-2 text-center '>
                <option value="atomicNumber">Atomic Number</option>
                <option value="atomicName">Atomic Name</option>
                <option value="symbol">Symbol</option>
                <option value="type">Metal Type</option>
                <option value="block">Block</option>
                <option value="state">State</option>
                <option value="bondingType">Bonding Type</option>
                <option value="group">Group</option>
                <option value="period">Period</option>
            </select>
        </div>

        {/*  Search    */}

        {(filter=='atomicNumber'||filter=='atomicName'||filter=='symbol'||filter=='group'||filter=='period')&&<div className='col-span-2 md:col-span-1 w-full'><input type="search" placeholder={`Search any ${filter}...`}value={search} required onChange={(e)=>setSearch(e.target.value)} className='  mx-2 px-4 py-2 w-full rounded-2xl text-sm md:text-lg placeholder:capitalize'/></div>}

        {/* Metal Type */}
        {filter=='type'&&<div className='col-span-2 md:col-span-1 w-full'><select  value={search} onChange={(e)=>setSearch(e.target.value)} className='bg-transparent outline-0 pb-1 border-b-2 p-2 md:px-10 mx-2 text-center text-sm md:text-lg' >
            <option value="post-transition metal">Post-Transition Metal</option>
            <option value="alkali metal">Alkali Metal</option>
            <option value="transition metal">Transition Metal</option>
            <option value="metal">Metal</option>
            <option value="nonmetal">Non-Metal</option>
            <option value="lanthanoid">Lanthanoid</option>
            <option value="actinoid">Actinoid</option>
            <option value="noble gas">Noble Gas</option>
            <option value="halogen">Halogen</option>
            <option value="alkaline earth metal">Alkaline Earth Metal</option>
        </select></div>}

        {/* Block Type */}
        {filter=='block'&&<div className='col-span-2 md:col-span-1 w-full'><select  value={search} onChange={(e)=>setSearch(e.target.value)} className='bg-transparent outline-0 pb-1 border-b-2 p-2 md:px-10 mx-2 text-center text-sm md:text-lg' >
            <option value="s">s</option>
            <option value="p">p</option>
            <option value="d">d</option>
            <option value="f">f</option>
        </select></div>}

        {/* State Type */}
        {filter=='state'&&<div className='col-span-2 md:col-span-1 w-full'><select  value={search} onChange={(e)=>setSearch(e.target.value)} className='bg-transparent outline-0 pb-1 border-b-2 p-2 md:px-10 mx-2 text-center text-sm md:text-lg' >
            <option value="solid">Solid</option>
            <option value="liquid">Liquid</option>
            <option value="gas">Gas</option>
            <option value="unknown">Unknown</option>
        </select></div>}
        
        {/* Bonding Type */}
        {filter=='bondingType'&&<div className='col-span-2 md:col-span-1 w-full'><select  value={search} onChange={(e)=>setSearch(e.target.value)}  className='bg-transparent outline-0 pb-1 border-b-2 p-2 md:px-10 mx-2 text-center text-sm md:text-lg'>
            <option value="atomic">Atomic</option>
            <option value="diatomic">Diatomic</option>
            <option value="covalent network">Covalent Network</option>
            <option value="metallic">Metallic</option>
            <option value="unknown">Unknown</option>
        </select></div>}



        <div>
            <button onClick={()=>fetchListData()} className='py-1 px-2 border-2 bg-black/20 rounded-xl'>Search</button>
        </div>

        </div>

    {/*         List  Data */}

        {(!isFetching&&listData)&&<div className='mt-4'>
            {listData?.map((data)=><ListElement key={data.atomicNumber} data={data}/>)}
        </div>}

        {/*  ERROR */}
        {(error)&&<h1 className='h-max py-4 w-3/4 mt-4 mx-auto bg-white rounded-lg flex flex-col items-center justify-center'>Some Error Has Occured :(</h1>}

        {listData?.length==0&&<div className={`${isFetching&&'animate-pulse'} h-max py-4  mt-4 mx-auto bg-white rounded-lg flex flex-col items-center justify-center`}>
            <h1 className={`text-md md:text-2xl my-2 ${isFetching&&'animate-pulse'}`}>Search Any Element By Their Atomic No., Name, Block, Group, Period, and More...</h1>
            {isFetching&&<div className='w-10 h-10 border-4 border-violet-400 p-4 border-t-4 border-t-blue-300 rounded-full animate-spin'></div>}
            </div>}

    </section>
  )
}

export default List