import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import AuthContextProvider from './context/authContext'
import StackNavigation from './navigation/StackNavigation'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style='light' />
      <AuthContextProvider>
        <StackNavigation />
      </AuthContextProvider>
    </View>
  )
}
