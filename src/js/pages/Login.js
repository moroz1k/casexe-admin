import React from 'react'
import { connect } from 'react-redux'

const Login = ({
  onChange,
  onSubmit,
  login
}) => {
  const submit = (event) => {
    event.preventDefault()

    onSubmit()
  }

  return (
    <div className="login">
      <h1>Авторизация</h1>

      {login.error &&
      <div className="login-error">{login.error}</div>}

      <form className="login-form" onSubmit={submit}>
        <input
          type="text"
          name="username"
          value={login.form.username}
          onChange={event => onChange({ name: event.target.name, value: event.target.value })}
          placeholder="username"/>
        <input
          type="password"
          name="password"
          value={login.form.password}
          onChange={event => onChange({ name: event.target.name, value: event.target.value })}
          placeholder="password"/>
        <button type="submit" className="btn">Авторизоваться</button>
      </form>
    </div>
  )
}

const mapState = ({ login }) => ({
  login
})

const mapDispatch = ({ login: { onChange, onSubmit } }) => ({
  onChange,
  onSubmit
})

export default connect(mapState, mapDispatch)(Login)
