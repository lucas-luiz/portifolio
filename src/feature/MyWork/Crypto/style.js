import styled from "styled-components"
import StyledProject from "../StyledProject"

const StyledCrypto = styled(StyledProject)`
    & .project__bottom{
        padding: 0 0.5rem;
    }
    & .project__top{
        height:100%;
        flex-direction: column;
        align-items: flex-start;
    }
    & .project__left{
        flex-direction:column;
        width:85%;
    }
`

export default StyledCrypto