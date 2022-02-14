import Table from './components/Table'
import Header from './components/Header'
import Loading from './components/Loading'
import {useEffect,useState} from 'react'
import fetchAllElements from './Api';

function App() {

  const [allElements,setAllElements] = useState()
  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
    fetchAllElements(setIsLoading)
    .then((response)=>{
      setAllElements(response)
      setIsLoading(false)
    })
    console.log(isLoading)
  },[])

  return (
    <div className="App ">
      {!isLoading?<div className='max-h-screen'>
        <Header />
        <main className='max-h-screen'>
          {!isLoading&& <Table allElements={allElements} />}
        </main>
      </div>:<Loading />}
    </div>
  );
}

export default App;
