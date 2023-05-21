import { useContext } from 'react'
import AuthStack from './AuthStack'
import AuthenticatedStack from './AuthenticatedStack'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from '../context/authContext'

const StackNavigation = () => {
  const { isAuthenticated } = useContext(AuthContext)
  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default StackNavigation
