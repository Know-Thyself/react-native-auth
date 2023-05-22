import { useContext, useState, useEffect, useCallback } from 'react'
import AuthStack from './AuthStack'
import AuthenticatedStack from './AuthenticatedStack'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from '../context/authContext'
import * as SplashScreen from 'expo-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View } from 'react-native'

SplashScreen.preventAutoHideAsync()

const StackNavigation = () => {
  const { isAuthenticated, authenticate } = useContext(AuthContext)
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token')
        if (storedToken) {
          authenticate(storedToken)
        }
      } catch (error) {
        console.warn(error)
      } finally {
        setAppIsReady(true)
      }
    }
    retrieveToken()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        {isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
      </NavigationContainer>
    </View>
  )
}

export default StackNavigation
