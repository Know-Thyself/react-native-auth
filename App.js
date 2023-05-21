import { StatusBar } from 'expo-status-bar'
import AuthContextProvider from './context/authContext'
import StackNavigation from './navigation/StackNavigation'

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <AuthContextProvider>
        <StackNavigation />
      </AuthContextProvider>
    </>
  )
}
