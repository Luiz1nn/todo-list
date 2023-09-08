import { Header, Input } from '@/components'
import { View } from 'react-native'
import { styles } from './styles'
import { useState } from 'react'

export const Home = () => {
  const [newTaskValue, setNewTaskValue] = useState('')

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Input value={newTaskValue} onChangeText={setNewTaskValue} />
        </View>
      </View>
    </View>
  )
}
