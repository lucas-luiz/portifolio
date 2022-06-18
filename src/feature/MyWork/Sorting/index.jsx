import React from 'react'

//hooks
import { useState, useEffect } from 'react'

//style
import StyledSorting from './style'


function Sorting() {


    const [array, setArray] = useState([])


    useEffect(() => {
        const numVectors = 20
        //SET ARRAY
        for (let i = 0; i < numVectors; i++) {
            array[i] = Math.random() * 100
        }
        setArray([...array])


        let count = 0
        let unorderedArea = numVectors
        let currArray = array
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

        }, 30);
    }, [])
    return (
        <StyledSorting >

            <div className="sorting__info">
                {/* 
                time
                algorithm infos (time, ex O^n)
                number of vectors
                */}
            </div>

            <div className="sorting__visualization">
                <div className="top">
                    {
                        array.map((vector, index) => {
                            return <div className='vector' key={index} style={{ height: `${vector}%` }}></div>
                        })
                    }
                </div>
                <div className="bottom">
                    {
                        array.map((vector, index) => {
                            return <div className='vector' key={index} style={{ height: `${vector}%` }}></div>
                        })
                    }
                </div>
            </div>
            <div className="sorting__config">
                {/* 
                algorithm 
                speed
                array size (number of vectors)
                 */}
            </div>
        </StyledSorting >
    )
}


export default Sorting