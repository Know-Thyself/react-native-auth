import { useState } from 'react'
import AuthContent from '../auth/AuthContent'
import { createUser } from '../utils/auth'
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { Alert } from 'react-native'

const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const signUpHandler = async ({ email, password }) => {
    setIsAuthenticating(true)
    try {
      await createUser(email, password)
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Please enter a valid email and password or try again later'
      )
    }
    setIsAuthenticating(false)
  }
  return isAuthenticating ? (
    <LoadingOverlay message='Creating user account...' />
  ) : (
    <AuthContent onAuthenticate={signUpHandler} isLogin={false} />
  )
}

export default SignupScreen
