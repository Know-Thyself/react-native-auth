import { StyleSheet, Text, View } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext'

const WelcomeScreen = () => {
  const [message, setMessage] = useState('')
  const { token } = useContext(AuthContext)

  useEffect(() => {
    fetch(
      `https://auth-practice-51a0b-default-rtdb.europe-west1.firebasedatabase.app/message.json?auth=${token}`
    )
      .then(response => response.json())
      .then(data => setMessage(data))
      .catch(err => console.error(err))
  }, [token])

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
})

export default WelcomeScreen
