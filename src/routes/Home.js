import React from "react";
import { useState } from "react";

export default function Home({users}) {
    const [newFed, setNewFed] =useState('')
    const [newState, setNewState] =useState('')
    const [newFicaMed, setNewFicaMed] =useState('')
	const [newFicaSs, setNewFicaSs] =useState('') 
	const [newQuarterwcomp, setNewQuarterwcomp] =useState('')
	const [newUpdate, setNewUpdate]= useState('')   
}
const [user, updatePayHours, e] =useState('')
return(
    <div>
        <h2>Home</h2>
        <h2>Pay Check Calculator</h2>
        <div className='header'>
            <h3 className="text-center">Pay Check Hours</h3>
            <App />
        </div>
    </div>
)