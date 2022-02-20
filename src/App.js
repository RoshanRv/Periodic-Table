import Table from './components/Table'
import Header from './components/Header'
import Loading from './components/Loading'
import {useEffect,useState} from 'react'
import fetchAllElements from './Api';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {

  const [allElements,setAllElements] = useState()
  const [symbol,setSymbol] = useState([])
  const [difficulty,setDifficulty] = useState(0)
  const [score,setScore] = useState(0)
  const [tab,setTab] = useState(true)
  const [isLoading,setIsLoading] = useState(true)

  // let atomicNo =[]

  useEffect(()=>{
    fetchAllElements(setIsLoading)
    .then((response)=>{
      setAllElements(response)
      setIsLoading(false)
      response.forEach((data)=>{
        symbol.push(data.name)
      })

    })
    console.log(isLoading)
  },[])

  return (
    <Router >
      <div className="App min-h-screen " style={{backgroundColor: '#96e7ff',
background: 'linear-gradient(45deg, #96e7ff 0%, #d279ff 100%)'
}}>
        {!isLoading?<div className=' '>
          <Header setTab={setTab} tab={tab}/>
            <main className='overflow-hidden font-disp '>
            <Routes >
              <Route path='/' element={!isLoading&& <Table allElements={allElements} tab={tab} difficulty={difficulty} setDifficulty={setDifficulty}/>} />
              <Route path='/game' element={!isLoading&& <Table allElements={allElements} tab={tab} difficulty={difficulty} setDifficulty={setDifficulty}
              symbol={symbol} score={score} setScore={setScore}/>} />
]            </Routes>
            </main>
        </div>:<Loading />}
      </div>
    </Router>
  );
}

export default App;
