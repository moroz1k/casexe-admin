import React from 'react'
import { Router, Route, Link, Redirect } from 'react-router-dom'
import store from 'js/store'
import { Provider } from 'react-redux'

import { checkAuth } from 'js/helpers'
import history from 'js/utils/history'

import Home from './pages/Home'
import Users from './pages/Users'
import Profile from './pages/Profile'
import Login from './pages/Login'

const HeaderBlock = () => (
  <div className="header">
    <div className="header-title"><span className="primary">Casexe</span> Admin</div>
    <div className="header-menu">
      <Link className="header-menu-link" to="/">На главную</Link>
      <Link className="header-menu-link" to="/users">Пользователи</Link>
      <Link className="header-menu-link" to="/profile">Профиль</Link>
    </div>
  </div>
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    checkAuth()
      ? <Component {...props} />
      : <Redirect to='/login'/>
  )}/>
)
const NotPrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    !checkAuth()
      ? <Component {...props} />
      : <Redirect to='/profile'/>
  )}/>
)

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="app" id="app">
            <HeaderBlock/>
            <div className="app-content">
              <Route path="/" exact component={Home}/>
              <Route path="/users/" component={Users}/>
              <PrivateRoute path="/profile" component={Profile}/>
              <NotPrivateRoute path="/login" component={Login}/>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
