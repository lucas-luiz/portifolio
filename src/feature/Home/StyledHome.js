import styled from "styled-components";
import Section from "../../components/Section"

const Home = styled(Section)`
   
    & .Home__banner{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        
        position: absolute;
        top: 50%; 
        left: 10%;
        
        transition: 0.3s ease-in-out;
        transform: translate(0, -50%);
    }
    & .Home__title{
        line-height: 1.5;
    }
    & .Home__subtitle{
        font-weight: bolder;
        letter-spacing: .4em;
        line-height: 2.2 ;
        padding-left: .4em;
    }
`

export default Home