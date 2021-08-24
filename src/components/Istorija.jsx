import React from 'react'
import Navbar from './Navbar'
import Racun from './Racun'

export default function Istorija(props) {
    return (
        <div className='container'>
            <Navbar />
            <h1 className='text-center'>Spisak uplatnica</h1>
            {props.racuni.map(element => {
                return (
                    <Racun podaci={element} />
                )
            })}
        </div>
    )
}
