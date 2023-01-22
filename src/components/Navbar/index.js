import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const backgroundColor = isDarkTheme ? 'NavbackgroundColor' : null
      const textColor = isDarkTheme ? 'NavtextColor' : null
      const logo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const toggleButton = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const onToggleMode = () => {
        toggleTheme()
      }

      return (
        <nav className={`navbar ${backgroundColor}`}>
          <img src={logo} alt="website logo" className="logo" />
          <div>
            <ul className="navLinks">
              <li className="navItem">
                <Link to="/" className={`link ${textColor}`}>
                  Home
                </Link>
              </li>
              <li className="navItem">
                <Link to="/about" className={`link ${textColor}`}>
                  About
                </Link>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="toggleBtn"
            onClick={onToggleMode}
            data-testid="theme"
          >
            <img src={toggleButton} alt="theme" className="toggleImg" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
