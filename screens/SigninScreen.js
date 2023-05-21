import { useContext, useState } from 'react'
import AuthContent from '../auth/AuthContent'
import { signIn } from '../utils/auth'
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { Alert } from 'react-native'
import { AuthContext } from '../context/authContext'

const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const { authenticate } = useContext(AuthContext)

  const signInHandler = async ({ email, password }) => {
    setIsAuthenticating(true)
    try {
      const token = await signIn(email, password)
      authenticate(token)
    } catch (error) {
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
