import styled from "styled-components";
import Section from "./Section"

const MyWork = styled(Section)`
    display: flex;
    justify-content: space-between;

    & span{
        display: flex;
        align-items:center;
        column-gap:0.5rem;
        padding: 1rem;
    }
    & span:hover{
        column-gap:1em;
    }
    
    & .MyWork__title{
        text-align: center;
        position: absolute;
        transition: 0.4s ease-in-out;
    }
    & .expanded{
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 5rem;
        & svg{
            display:none;
        }
    }
    & .retracted{
        top: 0;
        left: 50%;
        transform: translate(-50%, calc(-100% - 1rem));
    }

`

export default MyWork