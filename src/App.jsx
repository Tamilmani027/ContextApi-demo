import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './components/buttons/Button'
import Card from './components/cards/Card'
import Context from './components/Context'

function App(){

  let city='Bengaluru';

  return (
    <>
    <Context.Provider value={city}>
    <div className='cards'>     
    <Card name="Vijay" email="vijay@gmail.com" btn='btn1'></Card>
    <Card name="Vikram" email="vikram@gmail.com" btn='btn2'></Card>
    <Card name="Vishal" email="vishal@gmail.com" btn='btn3'></Card>
    </div>
    </Context.Provider>
    </>
  );
}

export default App;
