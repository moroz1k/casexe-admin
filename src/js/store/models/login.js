import { setAuth } from '../../helpers'
import history from 'js/utils/history'

const login = {
  state: {
    form: {
      username: '',
      password: ''
    },
    error: ''
  },
  reducers: {
    changeFormValue (state, target) {
      let { name, value } = target

      return {
        ...state,
        form: {
          ...state.form,
          [name]: value
        }
      }
    },
    setError (state, error) {
      return {
        ...state,
        error
      }
    }
  },
  effects: (dispatch) => ({
    onChange (target) {
      this.changeFormValue(target)
    },
    onSubmit (_, { login }) {
      this.setError('')

      if (login.form.username === 'Admin' && login.form.password === '12345') {
        setAuth(true)
        history.push(`/profile`)
      } else {
        this.setError('Имя пользователя или пароль введены не верно ')
      }
    }
  })
}

export default login
