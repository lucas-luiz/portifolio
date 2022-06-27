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
`

export default StyledCrypto