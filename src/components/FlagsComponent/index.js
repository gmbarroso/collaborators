import React, { useState } from 'react'

import br from '../../img/flags/br.svg'
import us from '../../img/flags/us.svg'
import es from '../../img/flags/es.svg'

import './style.css'

const Flags = ({ language }) => {
    const [ lang, setLang ] = useState('br')

    const handleBr = () => {
        setLang('br')
        language('br')
    }

    const handleUs = () => {
        setLang('en')
        language('en')
    }

    const handleEs = () => {
        setLang('es')
        language('es')
    }

    return (
        <div className="flags">
            <img className="flag" id="br" src={br} alt="icon" onClick={() => handleBr()} />
            <img className="flag" id="us" src={us} alt="icon" onClick={() => handleUs()} />
            <img className="flag" id="es" src={es} alt="icon" onClick={() => handleEs()} />
        </div>
    )
}

export default Flags