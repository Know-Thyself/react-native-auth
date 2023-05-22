import { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: token => {},
  signOut: () => {},
})

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState()

  // automatically signing the user in if their token has been stored
  useEffect(() => {
    const retrieveToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token')
        if (storedToken) {
          setAuthToken(storedToken)
          authenticate(storedToken)
        }
      } catch (error) {
        console.warn(error)
      }
    }
    retrieveToken()
  }, [])

  const authenticate = token => {
    setAuthToken(token)
    AsyncStorage.setItem('token', token)
  }

  const signOut = () => {
    setAuthToken(null)
    AsyncStorage.removeItem('token')
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
