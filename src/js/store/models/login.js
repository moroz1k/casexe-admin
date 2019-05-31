const login = {
  state: {
    form: {
      login: '',
      password: ''
    }
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
    }
  },
  effects: (dispatch) => ({
    onChange (target) {
      this.changeFormValue(target)
    }
  })
}

export default login
