import React from "react"
import { useState, useEffect } from "react"
import fetchAllElements from "../Api"
import ListElement from "./ListElement"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const List = () => {
    const [filter, setFilter] = useState("atomicnumber")
    const [search, setSearch] = useState("")
    const [listData, setlistData] = useState("")
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setlistData([])

        if (filter == "groupblock") setSearch("s")
        else if (filter == "state") setSearch("solid")
        else if (filter == "bondingType") setSearch("atomic")
        else setSearch("")
    }, [filter])

    const fetchListData = () => {
        setIsFetching(true)
        setError(false)

        if (filter == "symbol") {
            let arr = search.toLowerCase().split("")
            arr[0] = arr[0].toUpperCase()
            arr = arr.join("")
            console.log(arr)
            setSearch(arr)

            fetchAllElements(setIsFetching, filter, arr, setError).then(
                (resp) => {
                    setlistData(resp)
                    setIsFetching(false)
                }
            )
        } else {
            fetchAllElements(setIsFetching, filter, search, setError).then(
                (resp) => {
                    setlistData(resp)
                    setIsFetching(false)
                }
            )
        }
    }

    return (
        <section className="p-2 mx-auto mt-16 text-center md:p-4">
            <div className="py-2 mb-4 text-white shadow-lg font-head border-y-2 md:text-4xl bg-black/20 txt">
                <h1>Search</h1>
            </div>

            <div className="grid grid-cols-3 mx-auto gap-y-2">
                {/*             Filter                   */}
                <div className="col-span-3 md:col-span-1">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="p-2 pb-1 mx-2 text-sm text-center bg-transparent border-b-2 outline-0 md:text-lg "
                    >
                        <option value="atomicnumber">Atomic Number</option>
                        <option value="atomicname">Atomic Name</option>
                        <option value="symbol">Symbol</option>
                        {/* <option value="groupblock">Block</option> */}
                        <option value="state">State</option>
                        <option value="bondingtype">Bonding Type</option>
                    </select>
                </div>

                {/*  Search    */}

                {(filter == "atomicnumber" ||
                    filter == "atomicname" ||
                    filter == "symbol") && (
                    <div className="w-full col-span-2 md:col-span-1">
                        <input
                            type="search"
                            placeholder={`Search any ${filter}...`}
                            value={search}
                            required
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full px-4 py-2 mx-2 text-sm rounded-2xl md:text-lg placeholder:capitalize"
                        />
                    </div>
                )}

                {/* Block Type */}
                {/* {filter == "groupblock" && (
                    <div className="w-full col-span-2 md:col-span-1">
                        <select
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="p-2 pb-1 mx-2 text-sm text-center bg-transparent border-b-2 outline-0 md:px-10 md:text-lg"
                        >
                            <option value="s">s</option>
                            <option value="p">p</option>
                            <option value="d">d</option>
                            <option value="f">f</option>
                        </select>
                    </div>
                )} */}

                {/* State Type */}
                {filter == "state" && (
                    <div className="w-full col-span-2 md:col-span-1">
                        <select
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="p-2 pb-1 mx-2 text-sm text-center bg-transparent border-b-2 outline-0 md:px-10 md:text-lg"
                        >
                            <option value="solid">Solid</option>
                            <option value="liquid">Liquid</option>
                            <option value="gas">Gas</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </div>
                )}

                {/* Bonding Type */}
                {filter == "bondingtype" && (
                    <div className="w-full col-span-2 md:col-span-1">
                        <select
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="p-2 pb-1 mx-2 text-sm text-center bg-transparent border-b-2 outline-0 md:px-10 md:text-lg"
                        >
                            <option value="atomic">Atomic</option>
                            <option value="diatomic">Diatomic</option>
                            <option value="covalent network">
                                Covalent Network
                            </option>
                            <option value="metallic">Metallic</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </div>
                )}

                <div>
                    <button
                        onClick={() => fetchListData()}
                        className="px-2 py-1 border-2 bg-black/20 rounded-xl"
                    >
                        Search
                    </button>
                </div>
            </div>

            {/*         List  Data */}

            {!isFetching && listData && (
                <div className="mt-4">
                    {listData?.map((data) => (
                        <ListElement key={data.atomicNumber} data={data} />
                    ))}
                </div>
            )}

            {/*  ERROR */}
            {error && (
                <h1 className="flex flex-col items-center justify-center w-3/4 py-4 mx-auto mt-4 bg-white rounded-lg h-max">
                    Some Error Has Occured :(
                </h1>
            )}

            {listData?.length == 0 && (
                <div
                    className={`${
                        isFetching && "animate-pulse"
                    } h-max py-4  mt-4 mx-auto bg-white rounded-lg flex flex-col items-center justify-center`}
                >
                    <h1
                        className={`text-md md:text-2xl my-2 ${
                            isFetching && "animate-pulse"
                        }`}
                    >
                        Search Any Element By Their Atomic No., Name, Block, and
                        More...
                    </h1>
                    {isFetching && (
                        <div className="w-10 h-10 p-4 border-4 border-t-4 rounded-full border-violet-400 border-t-blue-300 animate-spin"></div>
                    )}
                </div>
            )}
        </section>
    )
}

export default List
