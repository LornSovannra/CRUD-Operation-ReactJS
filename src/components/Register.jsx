import React, { useState } from 'react'
import { collection, addDoc } from '@firebase/firestore'
import db from '../firebase'

export default function Register() {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')

    const createHandler = async () => {
        if(name === "" && desc === "" ){
            alert("Please fill in the field!")
        }else{
            const collectionRef = collection(db, "schools")
            const payload = { name, desc }

            await addDoc(collectionRef, payload)

            alert("User created!")
            setName("")
            setDesc("")
        }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', margin: '30px 500px'}}>
            <h1>Name: {name}</h1>
            <p>Desc: {desc}</p>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input style={{marginTop: '10px', padding: '20px 10px'}} type="text" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} />
                <input style={{marginTop: '10px', padding: '20px 10px'}} type="text" placeholder="Desc..." value={desc} onChange={(e) => setDesc(e.target.value)} />
                <button
                    style={{marginTop: '10px', padding: '20px 10px', cursor: 'pointer'}}
                    onClick={createHandler}
                >Create</button>
            </div>
        </div>
    )
}