import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, onSnapshot, setDoc } from '@firebase/firestore'
import db from '../firebase'

export default function Detail() {
    const [school, setSchool] = useState([])
    const { id } = useParams()
    
    useEffect(() =>
        onSnapshot(doc(db, "schools", id), (doc) => {
            setSchool(doc.data())
        }),[id]
    )

    const editHandler = async () => {
        const name = prompt('Enter school name.')
        const desc = prompt('Enter school desc.')

        if(name === "" && desc === "" ){
            alert("Please fill in the field!")
        }else{
            const docRef = doc(db, "schools", id)
            const payload = { name, desc }
            setDoc(docRef, payload)
        }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '400px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', background: 'green', margin: '10px 0', borderRadius: 20}}>
                <h1>{ school.name }</h1>
                <p>{ school.desc }</p>
                <h3
                    style={{padding: '15px 100px', fontSize: 17, color: 'white', background: 'tomato', margin: 30, borderRadius: 20, cursor: 'pointer'}} 
                    onClick={() => editHandler(id)}
                >Edit</h3>
            </div>
        </div>
    )
}