import React, { useState, useEffect } from 'react'

export default function Racun(props) {
    const [platilac, setPlatilac] = useState('');
    const [sifra, setSifra] = useState('');
    const [iznos, setIznos] = useState(0);
    const [svrhaUplate, setSvrhaUplate] = useState('');
    const [tekuciRacun, setTekuciRacun] = useState('');
    const [primalac, setPrimalac] = useState('');
    const [modul, setModul] = useState('');
    const [poziv, setPoziv] = useState('');
    useEffect(() => {
        if (!props.podaci) {
            return;
        }
        const racun = props.podaci;
        setIznos(racun.iznos);
        setModul(racun.modul);
        setPlatilac(racun.platilac)
        setSvrhaUplate(racun.svrhaUplate);
        setTekuciRacun(racun.tekuciRacun);
        setPrimalac(racun.primalac);
        setSifra(racun.sifra);
        setPoziv(racun.poziv)
    }, [props.podaci])
    return (
        <div className='container oukviren pb-2 pt-2 mt-2' >
            <div className='row'>
                <div className='col-5'>
                    <label >Platilac</label>
                    <textarea className='form-control' onChange={(e) => {
                        const value = e.target.value;
                        setPlatilac(value);
                    }} value={platilac} disabled={!props.aktivan} cols="30" rows="4"></textarea>
                </div>
                <div className='col-7'>
                    <div className='row'>
                        <div className='col-3'>
                            <label >Sifra plac.</label>
                            <input className='form-control' onChange={(e) => {
                                const value = e.target.value;
                                setSifra(value);
                            }} value={sifra} disabled={!props.aktivan} type="number" />
                        </div>
                        <div className='col-3'>
                            <label >Valuta</label>
                            <input className='form-control' disabled type="text" value='RSD' />
                        </div>
                        <div className='col-6'>
                            <label >Iznos</label>
                            <input className='form-control' onChange={(e) => {
                                const value = e.target.value;
                                setIznos(value);
                            }} value={iznos} disabled={!props.aktivan} type="number" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <label >Tekuci racun primaoca</label>
                            <input className='form-control' onChange={(e) => {
                                const value = e.target.value;
                                setTekuciRacun(value);
                            }} value={tekuciRacun} disabled={!props.aktivan} type="text" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-5'>
                    <label >Svrha uplate</label>
                    <input className='form-control' onChange={(e) => {
                        const value = e.target.value;
                        setSvrhaUplate(value);
                    }} value={svrhaUplate} disabled={!props.aktivan} type="text" />
                </div>
                <div className='col-2'>
                    <label >Broj modula</label>
                    <input className='form-control' onChange={(e) => {
                        const value = e.target.value;
                        setModul(value);
                    }} value={modul} disabled={!props.aktivan} type="number" />
                </div>
                <div className='col-5'>
                    <label >Poziv na broj</label>
                    <input className='form-control' onChange={(e) => {
                        const value = e.target.value;
                        console.log(value);
                        setPoziv(value);
                    }} value={poziv} disabled={!props.aktivan} type="text" />
                </div>
            </div>
            <div className='row'>
                <div className='col-5'>
                    <label >Primalac</label>
                    <textarea className='form-control' onChange={(e) => {
                        const value = e.target.value;
                        setPrimalac(value);
                    }} value={primalac} disabled={!props.aktivan} cols="30" rows="4"></textarea>
                </div>
                <div className='col-7'>
                    {props.aktivan && (
                        <button className='form-control btn btn-secondary mt-5' onClick={(e) => {
                            e.preventDefault();
                            if (!iznos || !tekuciRacun || !primalac || !platilac || !sifra || !svrhaUplate) {
                                alert('vrednosti polja iznos, tekuciRacun, primalac, platilac, sifra placanja i shvrha uplate su obavezni.')
                                return;
                            }
                            const racunPodeljeno = tekuciRacun.split('-');
                            if (racunPodeljeno.length < 3) {
                                alert('mora postojati dva znaka - u tekucem racunu');
                                return;
                            }
                            const prviBroj = racunPodeljeno[0].trim();
                            const drugiBroj = racunPodeljeno[1].trim();
                            const treciBroj = racunPodeljeno[2].trim();
                            if (isNaN(prviBroj) || isNaN(drugiBroj) || isNaN(treciBroj)) {
                                alert('vrenosti podeljene sa - moraju biti brojevi');
                                return;
                            }
                            if (prviBroj.length !== 3) {
                                alert('prvi broj u tekucem racunu mora biti trocifren');
                                return;
                            }
                            if (drugiBroj.length > 13) {
                                alert('drugi broj u tekucem racunu mora imati max 13 cifara');
                                return;
                            }
                            if (treciBroj.length !== 2) {
                                alert('treci broj u tekucem racunu mora biti dvocifren');
                                return;
                            }
                            if (sifra.length !== 3) {
                                alert('sifra placanja mora biti trocifrena');
                                return;
                            }
                            if (iznos <= 0) {
                                alert('iznos mora biti pozitivan broj');
                                return;
                            }
                            if (!iznos || !tekuciRacun || !primalac || !platilac || !sifra || !svrhaUplate) {

                            }
                            const obj = {
                                iznos: iznos,
                                primalac: primalac,
                                platilac: platilac,
                                poziv: poziv,
                                modul: modul,
                                tekuciRacun: tekuciRacun,
                                svrhaUplate: svrhaUplate,
                                sifra: sifra,

                            }
                            props.kreirajUplatu(obj)
                        }}>Uplati</button>
                    )}
                </div>
            </div>
        </div>
    )
}
