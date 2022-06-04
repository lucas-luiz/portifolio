import styled from "styled-components";

const Nav = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    & span{
        align-self: end;
        width: fit-content;
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }

`

export default Nav