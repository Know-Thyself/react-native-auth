import { Pressable, StyleSheet, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const IconButton = ({ color, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <AntDesign name='logout' color={color} size={24} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.7,
  },
})

export default IconButton
