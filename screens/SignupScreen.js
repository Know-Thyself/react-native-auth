import { useContext, useState } from 'react'
import AuthContent from '../auth/AuthContent'
import { createUser } from '../utils/auth'
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { Alert } from 'react-native'
import { AuthContext } from '../context/authContext'

const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const { authenticate } = useContext(AuthContext)

  const signUpHandler = async ({ email, password }) => {
    setIsAuthenticating(true)
    try {
      const token = await createUser(email, password)
      authenticate(token)
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
