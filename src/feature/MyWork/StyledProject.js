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
    
`
export default StyledProject