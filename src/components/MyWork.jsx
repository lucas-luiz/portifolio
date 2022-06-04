import React, { Component } from 'react'
import NavLeft from '../css/NavLeft'
import NavRight from '../css/NavRight'
import Project from '../css/Project'
import StyledMyWork from '../css/StyledMyWork'
import { IoMdArrowDropdown } from 'react-icons/io'
import { VscDebugBreakpointLog } from 'react-icons/vsc'
import { useState, useEffect } from 'react'

function MyWork() {
    /* USE STATE DA CLASSE DE "MY WORK" */
    const [MyWork_state, setMyWork_state] = useState("retracted")
    const [currProject, setCurrProject] = useState(null)

    /* USE EFFECT PARA VERIFICAR O SCROLL */
    useEffect(() => {
        /* FUNC CHAMADA PELO EVENT LISTENER*/
        const onScroll = () => {
            /* verificar a posição da scroll e mudar a classe*/
            setMyWork_state(window.pageYOffset > window.innerHeight * 0.7 ? "expanded" : "retracted")
        }
        onScroll()
        /* EVENT LISTENER */
        window.addEventListener("scroll", onScroll);
    }, []);

    const openProject = (project) => {
        setCurrProject(project)
    }
    const closeProject = () => {
        setCurrProject(null)
    }

    return (
        <StyledMyWork>
            <h4 className={`MyWork__title ${MyWork_state}`}>
                My Work<br />
                <IoMdArrowDropdown />
            </h4>


            <NavLeft>
                <span onMouseOver={() => openProject('sorting')} onMouseLeave={() => closeProject()}>
                    <VscDebugBreakpointLog></VscDebugBreakpointLog>
                    sorting
                </span>
                <span onMouseOver={() => openProject('cryptography')}>
                    <VscDebugBreakpointLog></VscDebugBreakpointLog>
                    cryptography
                </span>
                <span onMouseOver={() => openProject('AI')}>
                    <VscDebugBreakpointLog></VscDebugBreakpointLog>
                    AI
                </span>
            </NavLeft>

            <NavRight>
                <span onMouseOver={() => openProject('search')}>
                    search
                    <VscDebugBreakpointLog></VscDebugBreakpointLog>
                </span>
                <span onMouseOver={() => openProject('lorem')}>
                    lorem
                    <VscDebugBreakpointLog></VscDebugBreakpointLog>
                </span>
                <span onMouseOver={() => openProject('API')}>
                    API
                    <VscDebugBreakpointLog></VscDebugBreakpointLog>
                </span>
            </NavRight>

            {
                currProject ? <Project></Project> : <></>
            }

        </StyledMyWork >
    )
}

export default MyWork