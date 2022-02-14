
const fetchAllElements = async(setIsLoading)=>{

    try{
        setIsLoading(true)

        const res = await fetch('https://periodic-table-elements-info.herokuapp.com/elements')
        const data = await res.json()
        console.log(data)
        return data
}catch(err){
        console.log('Error Has Occured')
    }

    
}

export default fetchAllElements