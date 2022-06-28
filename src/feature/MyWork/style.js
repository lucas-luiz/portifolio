import styled from "styled-components";
import Section from "../../components/Section"

const MyWork = styled(Section)`
    display: flex;
    justify-content: space-between;

   
   
    
    & .MyWork__title{
        
        text-align: center;
        position: absolute;
        transition: 0.4s ease-in-out;
        white-space: nowrap;
        
    }
    & .expanded{
        display:flex;
        align-items: baseline;
        line-height:.5;
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

    & .nav{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: grid;
        grid-auto-flow: column;
        justify-content: space-between;
        padding:1em;

    }

    .nav__span{
        width: fit-content;
        cursor: pointer;
        transition: 0.3s ease-in-out;

        display: flex;
        align-items:center;
        column-gap:0.5rem;
        /* padding: 1rem; */
    }
    .nav__span:hover{
        column-gap:1em;

    }

    & .span--right{
        grid-column: 2;
        justify-self:end;
    }

    & .span--left{
        grid-column: 1;
    }
    & .disabled{
        color:grey;
        cursor: default;
        column-gap:0.5em !important;

        & *{
            fill: grey;
        }
    }
   
`

export default MyWork