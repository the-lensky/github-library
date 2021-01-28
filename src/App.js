import React from 'react'
import './app.scss'
import {BrowserRouter, Route} from 'react-router-dom'
import Main from './components/main/Main'

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path='/' component={Main}/>
            </div>
        </BrowserRouter>
    )
}
export default App
