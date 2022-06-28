import React from 'react'
import { VscDebugBreakpointLog } from 'react-icons/vsc'
//hooks
import { useState, useEffect } from 'react'

//styles
import StyledCrypto from './style'

function Crypto() {
    const [text, setText] = useState("")
    const [key, setKey] = useState(0)
    const [crypto, setCrypto] = useState("")

    function encrypt(text, key) {
        const arr = text.split("")
        let newString = arr.map((char) => {
            if (char.charCodeAt(0) <= 90 && char.charCodeAt(0) >= 65) {
                let encryptedCharCode = char.charCodeAt(0) + key
                while (encryptedCharCode > 90) {
                    encryptedCharCode -= 26
                }
                return String.fromCharCode(encryptedCharCode)
            } else {
                return char
            }
        }).join("")

        return newString
    }
    function decrypt(crypto, key) {
        const arr = crypto.split("")
        let newString = arr.map((char) => {
            if (char.charCodeAt(0) <= 90 && char.charCodeAt(0) >= 65) {
                let decryptedCharCode = char.charCodeAt(0) - key
                while (decryptedCharCode < 65) {
                    decryptedCharCode += 26
                }
                return String.fromCharCode(decryptedCharCode)
            } else {
                return char
            }
        }).join("")

        return newString
    }


    useEffect(() => {
        const textInput = document.querySelector("#text")
        textInput.value = text
    }, [text])
    useEffect(() => {
        const cryptoInput = document.querySelector("#crypto")
        cryptoInput.value = crypto
    }, [crypto])
    function handleTextChange(e) {
        setText(e.target.value.toUpperCase())
        setCrypto(encrypt(e.target.value.toUpperCase(), key))
    }
    function handleKeyChange(e) {
        setKey(parseInt(e.target.value) ? parseInt(e.target.value) : 0)
        setCrypto(encrypt(text, parseInt(e.target.value) ? parseInt(e.target.value) : 0))
    }
    function handleCryptoChange(e) {
        setCrypto(e.target.value.toUpperCase())
        setText(decrypt(e.target.value.toUpperCase(), key))
    }
    return (
        <StyledCrypto>
            <div className="project__left">
                <span>caesar cipher: letters are replaced by others further in the the alphabet, based on a given offset</span>
            </div>

            <div className="project__top ">
                <input id="text" className="project__input" type="text" placeholder="decrypted text" onChange={handleTextChange} autoComplete="off"></input>
                <input id="key" className="project__input" type="text" placeholder="key" onChange={handleKeyChange} autoComplete="off"></input>
                <input id="crypto" className="project__input" type="text" placeholder="encrypted text" onChange={handleCryptoChange} autoComplete="off"></input>
            </div>
            <div className="project__bottom"></div>

            <div className="project__right">
                <span className="nav__span disabled">substitution cipher <VscDebugBreakpointLog /></span>

                <span className="nav__span disabled">keyword cipher<VscDebugBreakpointLog /></span>
                <span className="nav__span">caesar cipher <VscDebugBreakpointLog /></span>
            </div>
        </StyledCrypto >
    )
}

export default Crypto