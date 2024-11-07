// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import Datacontext from './context/DataContext'

// createRoot(document.getElementById('root')).render(
//     <Datacontext>
//     <App />
//     </Datacontext>
// )
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
)