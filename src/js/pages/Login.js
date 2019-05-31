import React from 'react'
import { connect } from 'react-redux'

const Login = ({
  onChange,
  login
}) => (
  <div className="login">
    <h1>Авторизация</h1>

    <form className="login-form">
      <input
        type="text"
        name="login"
        value={ login.form.login }
        onChange={ event => onChange({ name: event.target.name, value: event.target.value }) }
        placeholder="login"/>
      <input
        type="password"
        name="password"
        value={ login.form.password }
        onChange={ event => onChange({ name: event.target.name, value: event.target.value }) }
        placeholder="password"/>
      <button type="submit" className="btn">Авторизоваться</button>
    </form>
  </div>
)

const mapState = ({ login }) => ({
  login
})

const mapDispatch = ({ login: { onChange } }) => ({
  onChange
})

export default connect(mapState, mapDispatch)(Login)
