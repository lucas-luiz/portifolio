import styled from "styled-components";
import Section from "../../components/Section"

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

    }

    & .nav__span{
        width: fit-content;
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }

    & .span--right{
        grid-column: 2;
        justify-self:end;
    }

    & .span--left{
        grid-column: 1;
    }

    

    & .MyWork__canvasDiv{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);

        height: 50%;
        width: 50%;
/* 
        background-color: rgba(4, 3, 8, 1); */
        
        display:grid;
        grid-template-rows: 20px auto;
        

        & .canvasDiv__nav{
            grid-row:1;
            display:flex;
            flex-direction: row-reverse;

            background-color: #0C0915;
            border: 1px solid black;

            padding: 3px;

            & .canvasDiv__nav__button{
                border: none;
                background: black;
                color: grey;
                cursor:pointer;

                display: flex;
                justify-content:center;
                align-items: center;

                border-radius:100%;
                font-size:10px;

                padding: 2px;
            }
        }
        & canvas{
            grid-row: 2;
            z-index: 2;
            background-color: transparent;
        }
    }
    & .canvasDiv--show{
        opacity: 1;
    }
    & .canvasDiv--hide{
        opacity: 0;
    }
`

export default MyWork