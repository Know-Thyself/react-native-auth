import { useState } from 'react'
import AuthContent from '../auth/AuthContent'
import { signIn } from '../utils/auth'
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { Alert } from 'react-native'

const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const signInHandler = async ({ email, password }) => {
    setIsAuthenticating(true)
    try {
      await signIn(email, password)
    } catch (error) {
      console.error(error)
      Alert.alert(
        'Authentication failed!',
        'Please check your email and password'
      )
    }
    setIsAuthenticating(false)
  }

  return isAuthenticating ? (
    <LoadingOverlay message='Creating user account...' />
  ) : (
    <AuthContent onAuthenticate={signInHandler} isLogin />
  )
}

export default LoginScreen
