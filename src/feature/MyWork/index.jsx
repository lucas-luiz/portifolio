import React from 'react'

//hooks
import { useState, useEffect } from 'react'

//styles
import StyledMyWork from './style'

//components
import Sorting from './Sorting/index'
import Crypto from './Crypto/index'

//icons
import { IoMdArrowDropdown } from 'react-icons/io'
import { VscDebugBreakpointLog } from 'react-icons/vsc'


function MyWork() {
    //array de projects
    //for projects
    //imprimir cada navitem
    //se clicar no nav item, chamar callProject(project)


    const [currProject, setCurrProject] = useState(null)
    const [TitleIs, setTitleIs] = useState("retracted")

    const projects = {
        sorting: () => setCurrProject('sorting'),
        cryptografy: () => setCurrProject('crypto'),
        ai: () => setCurrProject('ai'),
        search: () => setCurrProject('serc'),
        lorem: () => setCurrProject('lore'),
        api: () => setCurrProject('api')
    }


    /* USE EFFECT PARA VERIFICAR O SCROLL */
    useEffect(() => {
        /* FUNC CHAMADA PELO EVENT LISTENER*/
        const pageOffsetHandle = () => setTitleIs(window.pageYOffset > window.innerHeight * 0.6 ? "expanded" : "retracted")
        pageOffsetHandle()
        /* EVENT LISTENER */
        window.addEventListener("scroll", pageOffsetHandle);
    }, []);




    return (
        <StyledMyWork>
            <h4 className={`MyWork__title ${TitleIs}`}>My Work<br /><IoMdArrowDropdown /></h4>
            <nav className="nav">
                {
                    Object.keys(projects).map((project, index) => {
                        return (
                            index >= Object.keys(projects).length / 2 ?
                                //left-side items
                                <span className="nav__span span--right" key={index} onClick={() => setCurrProject(project)} >
                                    {project}
                                    <VscDebugBreakpointLog></VscDebugBreakpointLog>
                                </span>
                                :
                                //right-side items
                                <span className="nav__span span--left" key={index} onClick={() => setCurrProject(project)} >
                                    <VscDebugBreakpointLog></VscDebugBreakpointLog>
                                    {project}
                                </span>
                        )
                    })
                }
            </nav>
            {currProject == 'sorting' ? <Sorting /> : null}
            {currProject == 'cryptografy' ? <Crypto /> : null}

        </StyledMyWork >
    )
}

export default MyWork