import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backgroundColor = isDarkTheme ? 'backgroundColor' : null
      const textColor = isDarkTheme ? 'textColor' : null

      return (
        <>
          <Navbar />
          <div className={`container ${backgroundColor}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              alt="not found"
              className="notfound-logo"
            />
            <h1 className={`notfound-heading ${textColor}`}>Lost Your Way?</h1>
            <p className={`${textColor}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
