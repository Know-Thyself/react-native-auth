import axios from 'axios'
import { REACT_APP_API_KEY } from '@env'

const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${REACT_APP_API_KEY}`
  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  })
  const token = response.data.idToken
  return token
}

export const createUser = (email, password) => {
  return authenticate('signUp', email, password)
}

export const signIn = (email, password) => {
  return authenticate('signInWithPassword', email, password)
}
