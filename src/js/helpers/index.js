export const authCookieName = 'casexe_is_auth'

export const checkAuth = () => localStorage.getItem(authCookieName)

export const setAuth = (bool) => localStorage.setItem(authCookieName, bool)
