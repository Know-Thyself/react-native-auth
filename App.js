import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import AuthContextProvider from './context/authContext'
import StackNavigation from './navigation/StackNavigation'
import { useEffect, useState, useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage'
SplashScreen.preventAutoHideAsync()

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token')
        if (storedToken) {
          setAppIsReady(true)
        }
      } catch (error) {
        console.warn(error)
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
      <StatusBar style='light' />
      <AuthContextProvider>
        <StackNavigation />
      </AuthContextProvider>
    </View>
  )
}
