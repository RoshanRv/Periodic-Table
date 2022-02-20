
const fetchAllElements = async(setIsLoading,filter='',search='',element='',setError)=>{

    try{
        setIsLoading(true)
        let res
        if(filter=='')res = await fetch(`https://periodic-table-elements-info.herokuapp.com/elements`)
        else res = await fetch(`https://periodic-table-elements-info.herokuapp.com/${element}/${filter}/${search}`)
        const data = await res.json()
        console.log(data,search)
        // setError(false)

        return data
}catch(err){
        if(filter=='')console.log('Error Has Occured')
        else console.log(err,filter,search)
        setError(true)
    }

    
}



export default fetchAllElements
