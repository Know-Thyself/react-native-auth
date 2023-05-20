import axios from 'axios'
import { REACT_APP_API_KEY } from '@env'

const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${REACT_APP_API_KEY}`
  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  })
  console.log(response.data)
}

export const createUser = async (email, password) => {
  const response = await authenticate('signUp', email, password)
}

export const signIn = async (email, password) => {
  const response = await authenticate('signInWithPassword', email, password)
}
