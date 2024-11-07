// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import Datacontext from './context/DataContext'

// createRoot(document.getElementById('root')).render(
//     <Datacontext>
//     <App />
//     </Datacontext>
// )

// for routing class
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'
// createRoot(document.getElementById('root')).render(
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
// )

//for redux 
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import React from 'react'
import {store} from './store/store.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)