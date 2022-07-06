import styled from 'styled-components'
import StyledProject from '../StyledProject'

const StyledSearch = styled(StyledProject)`
    & .project__right{
        flex-direction: column;
        
    }
    &  .project__top{
        flex-direction:column;
        align-items: flex-start;
    }
    
    &.search__compare{
        
        transition: 0.3s ease-in-out;
        display: flex;
        flex-direction:column;
    }
    & .search__array{
        display:flex;
        align-items:center;
        width:100%;
        height: 4.5rem;
        overflow-x:hidden;
        box-shadow: -1px 0px 0px 0px grey, 1px 0px 0px 0px grey;
        
        
    }
    & #array_element_0{
        transition:0.3s ease-in-out;
        margin-left: ${props => props.offset ? props.offset : 0};
    }    
    
    & .array__element, .search__compare__number{
        font-size: 1.2rem;
        min-width: 2.9rem;
        height: 2.9rem;
        display:flex;
        justify-content:center;
        align-items:center;
        border: 1px solid grey;
        transition: 0.3s ease-in-out;
    }
    & .search__compare__number{
        border: 1px solid ${props => props.compareColor};
    }
    & .search__compare__arrow{
        font-size: 1.2rem;
        line-height:0;
        text-align: center;
    }
    
    

`


export default StyledSearch
