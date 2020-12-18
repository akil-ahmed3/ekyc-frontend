// import Form from './components/form'
import Camera from './components/videoCamera'
import PhotoCamera from './components/photoCamera'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// import Def from './components/test'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav
            className="navbar navbar-expand-md navbar-dark bg-primary mb-3"
            style={{
              flex: 1
              // justifyContent: 'space-between'
            }}
          >
            <a
              class="navbar-brand"
              href="/"
              style={{ color: 'white', paddingLeft: '10px', fontSize: '24px' }}
            >
              E-KYC
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse navs" id="navbarColor02">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Video camera
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/video">
                    Video camera
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/photo">
                    Photo Camera
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/video">
              <Camera />
            </Route>
            <Route path="/photo">
              <PhotoCamera />
            </Route>
            <Route path="/">
              <Camera />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* <div>
        <Camera />
      </div> */}
    </div>
  )
}

export default App
