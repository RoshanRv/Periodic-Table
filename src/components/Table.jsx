import React, { useState, useEffect } from "react"
import Element from "./Element"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"
import List from "./List"

const Table = ({
    allElements,
    tab,
    difficulty,
    setDifficulty,
    symbol,
    setScore,
    score,
}) => {
    const [rand, setRand] = useState()
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(false)
    const [replay, setReplay] = useState(false)
    const [foundOnes, setFoundOnes] = useState([])
    const [highscore, setHighscore] = useState([])

    useEffect(() => {
        setHighscore(JSON.parse(localStorage.getItem("highscore")))
        console.log(highscore)
    }, [])

    const stop = () => {
        setRand("")
        symbol.splice(0, symbol.length)
        setFoundOnes([])
        console.log(foundOnes)
        allElements.forEach((data) => {
            symbol.push(data.name)
        })
        setStart(0)

        if (highscore == undefined || highscore == null) {
            console.log(score, highscore)

            localStorage.setItem("highscore", JSON.stringify(score))
            setHighscore(score)
        } else {
            if (score > highscore) {
                console.log(score, highscore)
                setHighscore(score)
                localStorage.setItem("highscore", JSON.stringify(score))
            }
        }
        setEnd(true)
        setReplay(true)
    }

    const getRandom = () => {
        if (symbol.length <= 0) stop()
        end && setScore(0)
        var sym = Math.floor(Math.random() * (symbol.length - 1))
        setRand(symbol[sym])
        symbol.splice(sym, 1)
        setStart(1)
        setEnd(false)

        // setTotalCorrect(0)
        // if(totalCorrect==1)
        // console.log(symbol)
    }

    return (
        <section>
            <div
                className={`lg:w-[81rem] md:w-[45rem] w-[18rem] mx-auto mt-3 pb-4 ${
                    !tab && "min-h-[88vh]"
                }`}
            >
                <div className="flex justify-between">
                    <div>
                        {
                            <Element
                                tab={tab}
                                setScore={setScore}
                                setFoundOnes={setFoundOnes}
                                foundOnes={foundOnes}
                                getRand={getRandom}
                                rand={rand}
                                difficulty={difficulty}
                                key={allElements[0]?.atomicNumber}
                                data={allElements[0]}
                            />
                        }
                    </div>

                    {/* Game Difficulty  */}
                    {!tab && (
                        <div className="flex items-center">
                            {start == 0 && (
                                <label className="text-xs md:text-lg md:mx-2">
                                    Difficulty:
                                </label>
                            )}
                            {start == 0 && (
                                <select
                                    value={difficulty}
                                    onChange={(e) =>
                                        setDifficulty(e.target.value)
                                    }
                                    className="mx-1 text-xs bg-transparent border-b-2 border-black outline-0 md:pb-1 md:text-lg md:mx-4 "
                                >
                                    <option value={1}>Easy</option>
                                    <option value={2}>Medium</option>
                                    <option value={3}>Hard</option>
                                </select>
                            )}
                            {start == 0 && !replay && (
                                <button
                                    className="md:px-2 md:py-1 px-1 text-[.6rem] md:text-lg bg-gradient-to-tr from-[#d279ff] to-[#96e7ff] rounded-md border-2"
                                    onClick={() => getRandom()}
                                >
                                    Play
                                </button>
                            )}
                            {start == 0 && replay && (
                                <button
                                    className="md:px-2 md:py-1 px-1 text-[.6rem] md:text-lg bg-gradient-to-tr from-[#d279ff] to-[#96e7ff] rounded-md border-2"
                                    onClick={() => getRandom()}
                                >
                                    Play Again
                                </button>
                            )}
                            {start == 1 && (
                                <button
                                    className="md:px-2 md:py-1 px-1 text-[.6rem] md:text-lg bg-gradient-to-tr from-[#d279ff] to-[#96e7ff] rounded-md border-2"
                                    onClick={() => stop()}
                                >
                                    Quit
                                </button>
                            )}
                            <div className="relative group">
                                <FontAwesomeIcon
                                    icon={faCircleInfo}
                                    className="bg-gray-200 text-[.5rem] md:text-sm rounded-full text-purple-300 ml-1 cursor-pointer border-2"
                                />
                                <div className="scale-0 group-hover:scale-100 top-6 -left-12 md:-left-40 text-center transition-transform bg-black/80 text-yellow-300 absolute p-1 text-xs w-[35vw]">
                                    <h1>How to Play:</h1>
                                    <p>
                                        An Element Name is Shown, Incorrect
                                        Guesses{" "}
                                        <span className="text-red-500">
                                            Deducts 50
                                        </span>{" "}
                                        Pts. while Correct Guesses{" "}
                                        <span className="text-green-500">
                                            Increases 100
                                        </span>{" "}
                                        Pts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="items-end">
                        {
                            <Element
                                tab={tab}
                                setScore={setScore}
                                setFoundOnes={setFoundOnes}
                                foundOnes={foundOnes}
                                getRand={getRandom}
                                rand={rand}
                                difficulty={difficulty}
                                key={allElements[1]?.atomicNumber}
                                data={allElements[1]}
                            />
                        }
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="grid grid-cols-2">
                        {allElements?.map((element, i) => {
                            if (i == 2 || i == 3 || i == 10 || i == 11)
                                return (
                                    <Element
                                        tab={tab}
                                        setScore={setScore}
                                        setFoundOnes={setFoundOnes}
                                        foundOnes={foundOnes}
                                        getRand={getRandom}
                                        rand={rand}
                                        difficulty={difficulty}
                                        key={element.atomicNumber}
                                        data={element}
                                    />
                                )
                        })}
                    </div>
                    {/*   LEGEND    */}
                    {tab && (
                        <div
                            className={`md:grid md:grid-cols-2 lg:grid-cols-3   hidden `}
                        >
                            <div className="flex items-center w-max">
                                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-[#ffff1a] border-2 border-black"></div>
                                <p className="px-2 text-xs lg:text-md ">
                                    Non Metals
                                </p>
                            </div>
                            <div className="flex items-center w-max">
                                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-[#ff1a1a] border-2 border-black"></div>
                                <p className="px-2 text-xs lg:text-md">
                                    Alkali Metals
                                </p>
                            </div>
                            <div className="flex items-center w-max">
                                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-[#0066ff] border-2 border-black"></div>
                                <p className="px-2 text-xs lg:text-md">
                                    Alkaline Earth Metals
                                </p>
                            </div>
                            <div className="flex items-center">
                                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-[#00bfff] border-2 border-black"></div>
                                <p className="px-2 text-xs lg:text-md">
                                    Transitional Metals
                                </p>
                            </div>
                            <div className="flex items-center">
                                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-[#00ff00] border-2 border-black"></div>
                                <p className="px-2 text-xs lg:text-md">
                                    Metals
                                </p>
                            </div>
                            <div className="flex items-center">
                                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-[#ff9933] border-2 border-black"></div>
                                <p className="px-2 text-xs lg:text-md">
                                    Noble Gases
                                </p>
                            </div>
                            <div className="flex items-center">
                                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-[#00e6e6] border-2 border-black"></div>
                                <p className="px-2 text-xs lg:text-md">
                                    Lanthanide
                                </p>
                            </div>
                            <div className="flex items-center">
                                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-[#a4f8e7] border-2 border-black"></div>
                                <p className="px-2 text-xs lg:text-md">
                                    Actinide
                                </p>
                            </div>
                            <div className="flex items-center">
                                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-[#ffb3ff] border-2 border-black"></div>
                                <p className="px-2 text-xs lg:text-md">
                                    Post-Transition Metals
                                </p>
                            </div>
                            <div className="flex items-center">
                                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-[#d24dff] border-2 border-black"></div>
                                <p className="px-2 text-xs lg:text-md">
                                    Halogen
                                </p>
                            </div>
                            <div className="flex items-center">
                                <div className="lg:w-4 h-4 md:w-3 md:h-3 bg-[#b3ff1a] border-2 border-black"></div>
                                <p className="px-2 text-xs lg:text-md">
                                    Metalloid
                                </p>
                            </div>
                        </div>
                    )}

                    {/*  SCORE    */}
                    {!tab && (
                        <div className="justify-center mt-1 text-center bg-white rounded-lg h-max">
                            {start == 1 && (
                                <h1 className="px-3 py-1 text-xs font-bold text-blue-600 md:text-lg md:py-2 md:px-6">
                                    {rand}
                                </h1>
                            )}
                            {end && highscore && (
                                <h1 className="md:px-5 px-2 md:py-2 py-[0.15rem] text-[.65rem] md:text-lg">
                                    Highscore:{" "}
                                    <span
                                        className={` font-bold ${
                                            highscore > 0
                                                ? "text-green-500"
                                                : "text-red-600"
                                        }`}
                                    >
                                        {highscore}
                                    </span>
                                </h1>
                            )}

                            {(replay || start == 1) && (
                                <h1 className="bg-black/10 md:py-1 md:px-5 px-2 text-[.65rem] md:text-lg">
                                    Score:{" "}
                                    <span
                                        className={` font-bold ${
                                            score > 0
                                                ? "text-green-500"
                                                : "text-red-600"
                                        }`}
                                    >
                                        {score}
                                    </span>
                                </h1>
                            )}
                        </div>
                    )}

                    <div className="grid grid-cols-6">
                        {allElements?.map((element, i) => {
                            if ((i > 3 && i < 10) || (i > 11 && i < 18))
                                return (
                                    <Element
                                        tab={tab}
                                        setScore={setScore}
                                        setFoundOnes={setFoundOnes}
                                        foundOnes={foundOnes}
                                        getRand={getRandom}
                                        rand={rand}
                                        difficulty={difficulty}
                                        key={element.atomicNumber}
                                        data={element}
                                    />
                                )
                        })}
                    </div>
                </div>

                <div className="flex justify-between ">
                    <div className="grid eight">
                        {allElements?.map((element, i) => {
                            if (i > 17 && i < 54)
                                return (
                                    <Element
                                        tab={tab}
                                        setScore={setScore}
                                        setFoundOnes={setFoundOnes}
                                        foundOnes={foundOnes}
                                        getRand={getRandom}
                                        rand={rand}
                                        difficulty={difficulty}
                                        key={element.atomicNumber}
                                        data={element}
                                    />
                                )
                        })}
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="grid grid-cols-2">
                        {allElements?.map((element, i) => {
                            if (i == 54 || i == 55 || i == 86 || i == 87)
                                return (
                                    <Element
                                        tab={tab}
                                        setScore={setScore}
                                        setFoundOnes={setFoundOnes}
                                        foundOnes={foundOnes}
                                        getRand={getRandom}
                                        rand={rand}
                                        difficulty={difficulty}
                                        key={element.atomicNumber}
                                        data={element}
                                    />
                                )
                        })}
                    </div>
                    <div className="grid grid-cols-1 lg:w-[4.5rem] md:w-10 w-4  text-center items-center	">
                        <h1 className="text-[8px] md:text-[1.5rem]">*</h1>
                        <h1 className="text-[8px] md:text-[1.5rem]">**</h1>
                    </div>

                    <div className="grid fifteen">
                        {allElements?.map((element, i) => {
                            if ((i > 70 && i < 86) || (i > 102 && i < 118))
                                return (
                                    <Element
                                        tab={tab}
                                        setScore={setScore}
                                        setFoundOnes={setFoundOnes}
                                        foundOnes={foundOnes}
                                        getRand={getRandom}
                                        rand={rand}
                                        difficulty={difficulty}
                                        key={element.atomicNumber}
                                        data={element}
                                    />
                                )
                        })}
                    </div>
                </div>
                {/* Radio Actives... */}
                <div className="flex justify-between mt-2">
                    <div className="grid grid-cols-2">
                        <div className="p-2  lg:w-[4.5rem] md:w-10 w-4"></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="grid gird-cols-1 lg:w-[4.5rem] md:w-10 w-4 text-right p-2 items-center">
                        <h1 className="text-[8px] md:text-[1.5rem] ">*</h1>
                        <h1 className="text-[8px] md:text-[1.5rem] ">**</h1>
                    </div>
                    <div className="grid fifteen">
                        {allElements?.map((element, i) => {
                            if ((i > 55 && i < 71) || (i > 87 && i < 103))
                                return (
                                    <Element
                                        tab={tab}
                                        setScore={setScore}
                                        setFoundOnes={setFoundOnes}
                                        foundOnes={foundOnes}
                                        getRand={getRandom}
                                        rand={rand}
                                        difficulty={difficulty}
                                        key={element.atomicNumber}
                                        data={element}
                                    />
                                )
                        })}
                    </div>
                </div>

                {/*   LEGEND    */}
                {tab && (
                    <div className="grid w-full grid-cols-3 mt-2 md:hidden">
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-[#ffff1a] border-2 border-black"></div>
                            <p className="px-2 text-[8px] pb-1 ">Non Metals</p>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-[#ff1a1a] border-2 border-black"></div>
                            <p className="px-2 text-[8px] pb-1">
                                Alkali Metals
                            </p>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-[#0066ff] border-2 border-black "></div>
                            <p className="px-2 text-[8px] pb-1">
                                Alkaline Earth Metals
                            </p>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-[#00bfff] border-2 border-black"></div>
                            <p className="px-2 text-[8px] pb-1">
                                Transitional Metals
                            </p>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-[#00ff00] border-2 border-black"></div>
                            <p className="px-2 text-[8px] pb-1">
                                Post Transitional Metals
                            </p>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-[#ff9933] border-2 border-black"></div>
                            <p className="px-2 text-[8px] pb-1">Noble Gases</p>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-[#00e6e6] border-2 border-black"></div>
                            <p className="px-2 text-[8px] pb-1">Lanthanide</p>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-[#a4f8e7] border-2 border-black"></div>
                            <p className="px-2 text-[8px] pb-1">Actinide</p>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-[#ffb3ff] border-2 border-black"></div>
                            <p className="px-2 text-[8px] pb-1">
                                Post-Transition Metals
                            </p>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-[#d24dff] border-2 border-black"></div>
                            <p className="px-2 text-[8px] pb-1">Halogen</p>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-[#b3ff1a] border-2 border-black"></div>
                            <p className="px-2 text-[8px] pb-1">Metalloid</p>
                        </div>
                    </div>
                )}
            </div>

            {/* LIST   */}

            {tab && <List />}
        </section>
    )
}

export default Table
