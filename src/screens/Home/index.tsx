import { useState } from 'react'
import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Button, Header, Input } from '@/components'
import { styles } from './styles'

type Task = {
  id: number
  text: string
  isChecked: boolean
}

export const Home = () => {
  const [newTaskValue, setNewTaskValue] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = () => {
    if (!newTaskValue) {
      return
    }

    const newTask: Task = {
      id: Date.now(),
      text: newTaskValue,
      isChecked: false,
    }

    setTasks((tasks) => [...tasks, newTask])
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Input value={newTaskValue} onChangeText={setNewTaskValue} />
          <Button onPress={addTask}>
            <Feather name="plus-circle" size={16} color="#f2f2f2" />
          </Button>
        </View>
      </View>
    </View>
  )
}
