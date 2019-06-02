import API from '../../../api'

const users = {
  state: {
    list: [],
    isLoaded: false
  },
  reducers: {
    setList (state, list) {
      return {
        ...state,
        list
      }
    },
    setLoaded (state, isLoaded) {
      return {
        ...state,
        isLoaded
      }
    }
  },
  effects: (dispatch) => ({
    async fetchList () {
      await API.fetchList()
        .then(this.setList)
        .then(() => this.setLoaded(true))
    }
  })
}

export default users
