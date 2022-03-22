import React, { useState, useEffect } from 'react'
import db from '../firebase'
import { collection, onSnapshot } from '@firebase/firestore'
import { Link } from 'react-router-dom'

export default function Home() {
    const [schools, setSchools] = useState([])

    //Use effect like that it will automatically update the state like real time data base ( Socket.io )
    useEffect(() => 
        onSnapshot(collection(db, "schools"), (snapshot) => {
            setSchools(snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))); //we can use only (doc.data()), but we use this just to get doc.id also
        }),[]
    )
    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '400px', margin: '0 auto'}}>
            {schools.map(school => {
                return (
                    <div
                        style={{textAlign: 'center', background: 'green', margin: '10px 0', borderRadius: 20}}
                        key={school.id}
                    >
                        <h1>Name: {school.name}</h1>
                        <p>Desc: {school.desc}</p>
                        <Link
                            to={`/detail/${school.id}`}
                            style={{padding: '15px 100px', color: 'white', fontSize: 17}}
                        ><p>Detail</p></Link>
                    </div>
                )
            })}
        </div>
    )
}