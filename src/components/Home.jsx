
import StyledHome from '../css/StyledHome'
import Title from '../css/Title'
import Subtitle from '../css/Subtitle'

function Home() {

  return (
    <StyledHome>
      <div className="Home__banner">
        <Title>portifolio</Title>
        <Subtitle>
          Lucas luiz <br />
          web dev and software engineer
        </Subtitle>
      </div>
    </StyledHome>
  )
}

export default Home