import styled from 'styled-components'
import StyledProject from '../StyledProject'

const StyledSorting = styled(StyledProject)`
    & .sorting__info, .sorting__config{
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
    }
    & .sorting__info{
        grid-row: span 3;
        grid-column: 1;
        & > div{
            display:flex;
            flex-direction: column;
        }
    }

    & .sorting__config{
        & > div{
            display:flex;
            flex-direction: column;
            align-items: flex-end;
        }
    }

    & .project__top,.project__bottom{
        display: flex;
        justify-content: space-around;
        height: 65%;
    }
    & .project__bottom{
        flex-direction: row-reverse;
    }
    & .vector{
        background-color: white;
        width: 2px;
    }
   
`
export default StyledSorting
