import styled from "styled-components";
import Section from "./Section"

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
`

export default Home