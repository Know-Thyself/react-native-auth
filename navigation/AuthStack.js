import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SigninScreen from '../screens/SigninScreen'
import SignupScreen from '../screens/SignupScreen'
import { Colors } from '../constants/styles'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  const [isAppReady, setIsAppReady] = useState(false)

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token')
        if (storedToken) {
          setIsAppReady(true)
        }
      } catch (error) {
        console.warn(error)
      }
    }
    retrieveToken()
  }, [])

  if (isAppReady) {
    return null
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name='Signin' component={SigninScreen} />
      <Stack.Screen name='Signup' component={SignupScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack
