import React from 'react'
import { useState, useEffect } from 'react'
import { VscDebugBreakpointLog } from 'react-icons/vsc'

import StyledSearch from './style'

export default function Search() {
    return (
        <StyledSearch>
            <div className="project__right">
                <span className="nav__span ">linear search<VscDebugBreakpointLog /></span>
                <span className="nav__span disabled">binary search<VscDebugBreakpointLog /></span>
                <span className="nav__span disabled">jump search<VscDebugBreakpointLog /></span>

            </div>
        </StyledSearch>
    )
}

