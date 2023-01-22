import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backgroundColor = isDarkTheme ? 'backgroundColor' : null
      const textColor = isDarkTheme ? 'textColor' : null
      const logoImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      return (
        <>
          <Navbar />
          <div className={`container ${backgroundColor}`}>
            <img src={logoImg} alt="about" className="about-logo" />
            <h1 className={`about-heading ${textColor}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
