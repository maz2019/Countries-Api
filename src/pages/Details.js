import React, {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
function Details() {
  const [mode, setMode] = useState(true)
  const [toggleBtn, setToggleBtn] = useState('<i class="far fa-sun"></i> Light Mode')
  const navigate = useNavigate();
  let {state} = useLocation();
  
  const toggleDarkMode = () => {
  if (mode) {
      document.documentElement.classList.add('dark')
      setToggleBtn('<i class="fas fa-moon"></i> Dark Mode')
      setMode(current => current = !current)
  }
  if (!mode) {
      document.documentElement.classList.remove('dark')
      setToggleBtn('<i class="far fa-sun"></i> Light Mode')
      setMode(current => current = !current)
  }
 }
  const goHomeBtn = () => {
    navigate("/");
  }
  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
      <div className='w-screen py-6 shadow-md bg-white mb-16 dark:bg-gray-700 dark:text-white'>
         <div className="container flex mx-auto">
            <h1 className='font-bold text-xl'>Where in the world?</h1>
            <div className="ml-auto font-medium">
               <button onClick={()=> toggleDarkMode()} dangerouslySetInnerHTML={{__html: toggleBtn}} ></button>
            </div>
         </div>
      </div>
      <div className="container mx-auto mb-16">
        <button className="px-8 py-2 bg-white text-gray-600 shadow-md dark:bg-gray-700 dark:text-white rounded-lg" onClick={() => goHomeBtn()}>
            <i className="fa fa-arrow-left"></i> Back
        </button>
      </div>
      <div className="container flex mx-auto p-8 pl-0 pr-0">
        {console.log(state)}
                <img src={state.flags.png} className="w-1/2 pr-8" alt={state.name.common} />
                <div className="p-8 pl-8">
                    <h2 className="font-bold text-2xl mb-8">{state.name.common}</h2>
                    <div className="grid grid-cols-2 gap-x-20 gap-y-4">
                        <p>Native Name: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.name.official}</span></p>
                        <p>Top Level Domain: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.tld[0]}</span></p>
                        <p>Population: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.population}</span></p>
                        <p>Region: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.region}</span></p>
                        <p>Sub Region: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.subregion}</span></p>
                        <p>Capital: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.capital}</span></p>
                        {/* <p>Currencies: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.currencies.map(cur => cur.name)}</span></p> */}
                        {console.log(state.languages)}
                        {/* <p>Languages: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.languages.map((lang) => lang.name+', ')}</span></p> */}
                    </div>
                    <div className="flex mt-16">
                        <p className="font-bold">Border Countries: </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Details