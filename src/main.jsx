import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const importFlowbiteFunc = function(flowbitePathStr)
{
    const flowbiteScriptEl = document.createElement('script')
    flowbiteScriptEl.setAttribute(
        'src', flowbitePathStr
    )
    document.body.appendChild(flowbiteScriptEl)
}
importFlowbiteFunc('https://unpkg.com/flowbite@1.5.2/dist/flowbite.js') // here goes your path to a local flowbite.js you want to import
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
