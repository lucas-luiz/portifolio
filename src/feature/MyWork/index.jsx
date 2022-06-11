import React, { Component } from 'react'

//hooks
import { useState, useEffect } from 'react'

//components
import Project from '../../components/Project'

//styles
import StyledMyWork from './style'

//icons
import { IoMdArrowDropdown } from 'react-icons/io'
import { VscDebugBreakpointLog } from 'react-icons/vsc'

//functions
import projects from './scripts'

function MyWork() {
    //array de projects
    //for projects
    //imprimir cada navitem
    //se clicar no nav item, chamar callProject(project)

    const [currProject, setCurrProject] = useState(null)
    const [canvasShow, setCanvasShow] = useState('hide')
    const openProject = (project) => {
        setCurrProject(project)

    }
    const closeProject = () => {
        setCurrProject(null)
    }
    useEffect(() => {
        if (currProject) {
            setCanvasShow('show')
            projects[currProject]()
        } else {
            setCanvasShow('hide')
        }
    }, [currProject])

    /* USE STATE DA CLASSE DE "MY WORK" */
    const [MyWork_state, setMyWork_state] = useState("retracted")

    /* USE EFFECT PARA VERIFICAR O SCROLL */
    useEffect(() => {
        /* FUNC CHAMADA PELO EVENT LISTENER*/
        const onScroll = () => {
            /* verificar a posição da scroll e mudar a classe*/
            setMyWork_state(window.pageYOffset > window.innerHeight * 0.6 ? "expanded" : "retracted")
        }
        onScroll()
        /* EVENT LISTENER */
        window.addEventListener("scroll", onScroll);
    }, []);

    return (
        <StyledMyWork>
            <h4 className={`MyWork__title ${MyWork_state}`}>
                My Work<br />
                <IoMdArrowDropdown />
            </h4>

            <nav className="nav">
                {
                    Object.keys(projects).map((project, index) => {
                        return (
                            index >= Object.keys(projects).length / 2 ?
                                //left-side items
                                <span className="nav__span span--right" key={index} onClick={() => openProject(project)} >
                                    {project}
                                    <VscDebugBreakpointLog></VscDebugBreakpointLog>

                                </span>
                                :
                                //right-side items
                                <span className="nav__span span--left" key={index} onClick={() => openProject(project)} >

                                    <VscDebugBreakpointLog></VscDebugBreakpointLog>
                                    {project}
                                </span>
                        )
                    })
                }
            </nav>
            <div id="canvasDiv" className={"MyWork__canvasDiv canvasDiv--" + canvasShow}></div>
            {/* <div className="MyWork__leftNav">

                <span onMouseOver={() => openProject('cryptography')}>
                    <VscDebugBreakpointLog></VscDebugBreakpointLog>
                    cryptography
                </span>
                <span onMouseOver={() => openProject('AI')}>
                    <VscDebugBreakpointLog></VscDebugBreakpointLog>
                    AI
                </span>
            </div>

            <div className="MyWork__rightNav">
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
            </div> */}
        </StyledMyWork >
    )
}

export default MyWork