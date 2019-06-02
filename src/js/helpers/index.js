export const authCookieName = 'casexe_is_auth'

export const checkAuth = () => localStorage.getItem(authCookieName) && localStorage.getItem(authCookieName) === 'true'

export const setAuth = (bool) => localStorage.setItem(authCookieName, bool)
