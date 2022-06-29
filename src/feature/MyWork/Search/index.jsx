import React from 'react'
import { useState, useEffect } from 'react'
import { VscDebugBreakpointLog } from 'react-icons/vsc'
import { GoArrowDown } from 'react-icons/go'
import StyledSearch from './style'

export default function Search() {
    const [array, setArray] = useState([])
    const [numElements, setNumElements] = useState(20)
    const [compareIndex, setCompareIndex] = useState(0)
    const [arrayOffset, setArrayOffset] = useState(0)

    //SET ARRAY
    useEffect(() => {
        for (let i = 0; i < numElements; i++) {
            array[i] = Math.floor(Math.random() * 100)
        }
        setArray([...array])
    }, [numElements])


    //ARRAY OFFSET
    useEffect(() => {

        if (compareIndex >= 4) {
            console.log("comapre index: " + compareIndex)
            setArrayOffset(-(2.9 / 1.5) - (compareIndex - 4) * 2.9)
        } else {
            setArrayOffset(0)
        }
    }, [compareIndex])

    //SEARCH TIMEINTERVAL
    useEffect(() => {
        let index = compareIndex
        const search = setInterval(() => {
            console.log(compareIndex)
            index++
            if (index > numElements - 1) {
                index = 0;
            }
            setCompareIndex(index);


        }, 1000);
    }, [])


    return (
        <StyledSearch offset={arrayOffset + 'rem'}>
            <div className="project__top">
                <div className="search__compare" style={{ transition: "0.3s ease-in-out", marginLeft: `${(compareIndex * 2.9) + arrayOffset}rem` }}>
                    <div className="search__compare__number" >10</div>
                    <div className="search__compare__arrow"><GoArrowDown /></div>
                </div>
                <div className="search__array" >
                    {
                        array.map((e, index) => {
                            return (
                                <div key={index} id={`array_element_${index}`} className="array__element" onClick={() => setCompareIndex(index)}>{e}</div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="project__right">
                <span className="nav__span ">linear search<VscDebugBreakpointLog /></span>
                <span className="nav__span disabled">binary search<VscDebugBreakpointLog /></span>
                <span className="nav__span disabled">jump search<VscDebugBreakpointLog /></span>

            </div>
        </StyledSearch >
    )
}

