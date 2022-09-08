import React, { useState, useEffect } from 'react'
import "./App.css"


const App = () => {
    const [ liability, setLiability ] = useState(0)
    const [ equity, setEquity ] = useState(0)
    const [ assets, setAssets ] = useState(0)
    
    useEffect(() => {
        setAssets(equity + liability)
    }
    , [equity, liability])

  return (
    <div className='app'> 
        <div className='app__main'>
            <div className='app__content'>
                <div className='app__title'>
                    <h1>Accuonting Equation</h1>
                    <p>( Assets = Liabilities + Equity )</p>
                </div>
                <div className='app__calc'>
                    <div className='app__inputContainer'>
                        <div className='app__input'>
                            <p> Liabilities: </p>
                            <span className='app__currencyInput'>$ <input type="number" value={ liability } onChange={ (e) => setLiability(Number(e.target.value)) } /></span>
                        </div>
                        <div className='app__input'>
                            <p> Equity: </p>
                            <span className='app__currencyInput'>$ <input type="number" value={ equity } onChange={ (e) => setEquity(Number(e.target.value)) } /></span>
                        </div>
                    </div>
                    <div className='app__result'>
                        <div className='app__resultContainer'>
                            <h2>Assets:</h2>
                            <p>$ { assets }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App