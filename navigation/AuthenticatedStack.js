import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/WelcomeScreen'
import { Colors } from '../constants/styles'
import IconButton from '../components/ui/IconButton'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

const Stack = createNativeStackNavigator()

const AuthenticatedStack = () => {
  const { signOut } = useContext(AuthContext)
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen
        name='Welcome'
        component={WelcomeScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              color={tintColor}
              onPress={signOut}
            />
          ),
        }}
      />
    </Stack.Navigator>
  )
}

export default AuthenticatedStack
