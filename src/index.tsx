import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import Store from './store/store';


const store = new Store();
export const context = createContext({
    store

})

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
    <context.Provider value={{
        store
    }}>
        <App />
    </context.Provider>,

);