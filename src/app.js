import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import React, { useState } from 'react';


const AppLayout = () => {
    return (
      
        
        <div className='appbg'>
        <Header/>
        <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

    






