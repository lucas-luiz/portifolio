import React from 'react'

//hooks
import { useState, useEffect } from 'react'

//style
import StyledSorting from './style'

//icons
import { VscDebugBreakpointLog } from 'react-icons/vsc'

function Sorting() {

    const [time, setTime] = useState(0)
    const [array, setArray] = useState([])


    useEffect(() => {

        const timer = setInterval(() => {

        }, 60)
        const numVectors = 20
        //SET ARRAY
        for (let i = 0; i < numVectors; i++) {
            array[i] = Math.random() * 100
        }
        setArray([...array])


        let count = 0
        let unorderedArea = numVectors
        let currArray = array
        const startTime = Date.now()
        const sorting = setInterval(() => {
            if (unorderedArea > 0) {

                if (currArray[count] > currArray[count + 1]) {
                    let aux = currArray[count + 1]
                    currArray[count + 1] = currArray[count]
                    currArray[count] = aux
                }
                count++
                if (count == unorderedArea) {
                    count = 0
                    unorderedArea--
                }

                setArray([...currArray])
            } else {
                clearInterval(sorting)
            }
            setTime((Date.now() - startTime) / 1000)

        }, 30);
    }, [])

    return (
        <StyledSorting >

            <div className="sorting__info project__left">
                <div>
                    <span>Time complexity: θ(n^2)</span>
                    <span>Number of vectors: 20</span>
                    <span>Time (s): {time}</span>
                </div>
                <div>
                    <span>speed: medium</span>
                    <span>array size: medium</span>
                </div>
            </div>


            <div className="project__top">
                {
                    //TO-DO: TURN CURR VECTOR INTO USESTATE, VERIFY USESTATE == INDEX AND PAINT THE CURR VECTOR GREEN
                    array.map((vector, index) => {
                        return <div className='vector' key={index} style={{ height: `${vector}%` }}></div>
                    })
                }
            </div>
            <div className="project__bottom">
                {
                    array.map((vector, index) => {
                        return <div className='vector' key={index} style={{ height: `${vector}%` }}></div>
                    })
                }
            </div>

            <div className="sorting__config project__right">
                <div>
                    <span className="nav__span">selection sort<VscDebugBreakpointLog /></span>
                    <span className="nav__span">insertion sort<VscDebugBreakpointLog /></span>
                    <span className="nav__span">bubble sort<VscDebugBreakpointLog /></span>
                    <span className="nav__span">quick sort<VscDebugBreakpointLog /></span>
                </div>
                <div>
                    <span className='nav__span'>random array<VscDebugBreakpointLog /></span>
                </div>
            </div>
        </StyledSorting >
    )
}


export default Sorting