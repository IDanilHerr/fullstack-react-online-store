import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import DeviceStore from './store/DeviceStore';
import UserStore from './store/UserStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter basename='/'>
        <Context.Provider value={{
            user: new UserStore(),
            device: new DeviceStore(),
        }}>
            <App /> 
        </Context.Provider>
    </BrowserRouter>
)