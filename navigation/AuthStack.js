import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SigninScreen from '../screens/SigninScreen'
import SignupScreen from '../screens/SignupScreen'
import { Colors } from '../constants/styles'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
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
