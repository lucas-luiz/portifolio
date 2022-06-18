import styled from 'styled-components'
const StyledSorting = styled.div`
    width:70rem;
    height: 25rem;
    margin:auto;

    display:grid;
    grid-template-columns: 1fr 22rem 1fr;
 & > .sorting__visualization{
    width: 100%;
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
 }
   
`
export default StyledSorting
