import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const textColor = isDarkTheme ? 'textColor' : null
      const backgroundColor = isDarkTheme ? 'backgroundColor' : null

      const logo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      return (
        <>
          <Navbar />
          <div className={`container ${backgroundColor}`}>
            <img src={logo} alt="home" className="home-logo" />
            <h1 className={`home-heading ${textColor}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
