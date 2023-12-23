import './index.css'

const Header = props => {
  const {score, timerInSeconds} = props
  return (
    <div className="Header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="match-game-logo"
      />
      <div className="game-details-con">
        <div className="game-details">
          <p className="detail-type">Score: </p>
          <p className="detail">{score}</p>
        </div>
        <div className="game-details">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="detail">{timerInSeconds} sec</p>
        </div>
      </div>
    </div>
  )
}

export default Header
