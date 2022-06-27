import styled from "styled-components";

const StyledProject = styled.div`
    width:70rem;
    height: 25rem;
    margin:auto;
    z-index:100;

    display:grid;
    grid-template-columns: 1fr 22rem 1fr;
    grid-template-rows: 1fr 5rem 1fr;

    & > div{
        display: flex;
    }

    & .project__left{
        grid-row: span 3;
        grid-column: 1;
    }
    & .project__right{
        grid-row: span 3;
        grid-column: 3;
        flex-direction:column;
        align-items: flex-end;
    }
    & .project__top{
        grid-row:1;
        grid-column:2;
        align-items: flex-end;
        align-self: flex-end;
    }
    & .project__bottom{
        grid-row:3;
        grid-column:2;
    }

    & .project__input{
        font-size:1rem;

        background: transparent;
        border:none;
        border-bottom:1px solid white;
        padding: 0.5em;
        width: 100%;

        font-weight: bolder;
        line-height: 1.5;
        letter-spacing: 0.4em;
   }
   & .project__input:focus{
        outline:none
   }
    
`
export default StyledProject