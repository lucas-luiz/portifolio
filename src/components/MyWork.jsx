import React, { Component } from 'react'
import NavLeft from './css/NavLeft'
import NavRight from './css/NavRight'
import StyledMyWork from './css/StyledMyWork'
import {IoMdArrowDropdown} from 'react-icons/io'
import {VscDebugBreakpointLog} from 'react-icons/vsc'
import { useState, useEffect } from 'react'

function MyWork(){
    /* USE STATE DA CLASSE DE "MY WORK" */
    const [MyWork_state, setMyWork_state] = useState("retracted");

    /* USE EFFECT PARA VERIFICAR O SCROLL */
    useEffect(() => {
        /* FUNC CHAMADA PELO EVENT LISTENER*/
        const onScroll = () => {
            /* verificar a posição da scroll e mudar a classe*/
            setMyWork_state(window.pageYOffset > window.innerHeight*0.8 ?  "expanded" : "retracted")
        }
        /* EVENT LISTENER */
        window.addEventListener("scroll", onScroll);
    }, [MyWork_state]);

    return(
        <StyledMyWork>
            <h4 className={`MyWork__title ${MyWork_state}`}>
                My Work<br/> 
                <IoMdArrowDropdown/> 
            </h4>

            <NavLeft>
                <span>
                <VscDebugBreakpointLog></VscDebugBreakpointLog>
                ordenação
                </span>
                <span>
                <VscDebugBreakpointLog></VscDebugBreakpointLog>
                criptogrfia  
                </span> 
                <span>
                <VscDebugBreakpointLog></VscDebugBreakpointLog>
                AI
                </span>
            </NavLeft>
            <NavRight>
                <span>
                busca
                <VscDebugBreakpointLog></VscDebugBreakpointLog>
                </span>
                <span>
                lorem
                <VscDebugBreakpointLog></VscDebugBreakpointLog>
                </span>
                <span>
                API
                <VscDebugBreakpointLog></VscDebugBreakpointLog>
                </span>
            </NavRight>
        </StyledMyWork>
    )
}

export default MyWork