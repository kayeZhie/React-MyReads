import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import { BrowserRouter} from 'react-router-dom'

//route component inside browser router//
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, 
	document.getElementById('root'))
