import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux'
import store from './redux/Store.js'

createRoot(document.getElementById('root')).render(
  // here we Wrap our Store component using provider
  <StrictMode>
    <Provider store={store} >
      <App />
   </Provider>

  </StrictMode>,
)
