import API from '../../../api'

const profile = {
  state: {
    profile: {},
    isLoaded: false
  },
  reducers: {
    setProfile (state, results) {
      return {
        ...state,
        profile: results[0]
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
    async fetchProfile () {
      await API.fetchProfile()
        .then(this.setProfile)
        .then(() => this.setLoaded(true))
    }
  })
}

export default profile
