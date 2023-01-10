const fetchAllElements = async (
    setIsLoading,
    filter = "",
    search = "",
    setError
) => {
    try {
        setIsLoading(true)
        let res
        if (filter == "")
            res = await fetch(`https://neelpatel05.pythonanywhere.com`)
        else
            res = await fetch(
                `https://neelpatel05.pythonanywhere.com/element/${filter}?${filter}=${search}`
            )
        let data = await res.json()

        if (
            filter == "atomicnumber" ||
            filter == "atomicname" ||
            filter == "symbol"
        ) {
            data = [data]
        }

        console.log(data, search)
        // setError(false)

        return data
    } catch (err) {
        if (filter == "") console.log("Error Has Occured")
        else console.log(err, filter, search)
        setError(true)
    }
}

export default fetchAllElements
