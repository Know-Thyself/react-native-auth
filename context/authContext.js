import { createContext, useState } from 'react'

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: token => {},
  signOut: () => {},
})

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState()
  const [isAuthorized, setIsAuthorized] = useState(false)
  const authenticate = token => {
    setAuthToken(token)
  }
  const signOut = () => {
    setAuthToken(null)
  }
  const state = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate,
    signOut,
  }
  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
