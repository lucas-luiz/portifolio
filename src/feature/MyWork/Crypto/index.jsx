import React from 'react'

//hooks
import { useState, useEffect } from 'react'

//styles
import StyledCrypto from './style'

function Crypto() {
    return (
        <StyledCrypto>
            <div className="project__left"><span>right</span></div>
            <div className="project__top"><span>right</span></div>
            <div className="project__right"><span>right</span></div>
            <div className="project__bottom"><span>right</span></div>
        </StyledCrypto >
    )
}

export default Crypto