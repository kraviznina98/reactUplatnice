import React from 'react'
import Navbar from './Navbar'
import Racun from './Racun'

export default function Pocetna(props) {
    return (
        <div className='container'>
            <Navbar />
            <div className='row mt-2'>
                <div className='col-8'>
                    <Racun aktivan kreirajUplatu={props.kreirajRacun} />
                </div>
                <div className='col-4'>
                    <h4>Ukupno uplaceno: {props.ukupno}</h4>

                </div>
            </div>
        </div>
    )
}
