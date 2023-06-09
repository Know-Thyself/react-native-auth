import { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import FlatButton from '../components/ui/FlatButton'
import AuthForm from './AuthForm'
import { Colors } from '../constants/styles'
import { useNavigation } from '@react-navigation/native'

const AuthContent = ({ isLogin, onAuthenticate }) => {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  })

  const navigation = useNavigation()

  function switchAuthModeHandler() {
    isLogin ? navigation.replace('Signup') : navigation.replace('Signin')
  }

  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials

    email = email.trim()
    password = password.trim()

    const emailIsValid = email.includes('@')
    const passwordIsValid = password.length > 6
    const emailsAreEqual = email === confirmEmail
    const passwordsAreEqual = password === confirmPassword

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.')
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      })
      return
    }
    onAuthenticate({ email, password })
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin
            ? `Don't have an account? Create a new user account`
            : 'Already have an account? Sign in instead'}
        </FlatButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
})

export default AuthContent
