import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let name: string = "Vinnz";
  let age: number = 23;
  let score1: number = 85
  let score2: number = 90
  let totalScore: number = score1 + score2
  let average: number = totalScore / 2


  // sdasd

  return (
    <> {/* FRAGMENT */}
        <h1 className='text-red-500'>Student Information</h1>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <h2>Scores</h2>
        <p>Score 1: {score1}</p>
        <p>Score 2: {score2}</p>
        <h3>Total Score: {totalScore}</h3>
        <h3>Average Score: {average}</h3>

    </>
  )
}

export default App
