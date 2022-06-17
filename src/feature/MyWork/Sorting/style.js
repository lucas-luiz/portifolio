import styled from 'styled-components'
const StyledSorting = styled.div`
    width: 22rem;
    margin:auto;

   /*  background-color:black ; */

    display: grid;
    grid-template-rows: 60px 5rem 60px;
    align-items: flex-end;
    justify-content: space-around;
    & > div{
        display: flex;
        
        justify-content: space-around;
        height:100%;
        width:22rem;
    }
    & .top{
        grid-row:1;
        align-items: flex-end;
    }
    & .bottom{
        grid-row:3;
        flex-direction: row-reverse;
    }
    & .vector{
        
        background-color: white;
        width: 2px;
    }
`
export default StyledSorting
