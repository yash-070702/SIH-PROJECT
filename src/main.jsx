import { StrictMode } from 'react'
import {Provider} from "react-redux";
import rootReducer from "./reducer";
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Toaster} from "react-hot-toast";
import {configureStore} from "@reduxjs/toolkit";
import './index.css'

const store=configureStore({
  reducer:rootReducer,

})
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}> 
   <BrowserRouter> 
   <App />
   <Toaster/>
  </BrowserRouter>
  </Provider>
  </StrictMode>,
)
