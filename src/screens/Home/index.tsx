import { useRef, useState } from 'react'
import { TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Button, Header, Input, List } from '@/components'
import { styles } from './styles'

export type Task = {
  id: number
  text: string
  isChecked: boolean
}

export const Home = () => {
  const [newTaskValue, setNewTaskValue] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])

  const newPlayerNameInputRef = useRef<TextInput>(null)

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

    newPlayerNameInputRef.current?.blur()
    setNewTaskValue('')
  }

  const toggleTaskCheck = (taskIdToBeChecked: number) => {
    const immutableTasks = tasks.map((task) => ({ ...task }))

    const taskToBeUpdated = immutableTasks.find(
      (task) => task.id === taskIdToBeChecked,
    )

    if (taskToBeUpdated) {
      taskToBeUpdated.isChecked = !taskToBeUpdated.isChecked
      setTasks(immutableTasks)
    }
  }

  const removeTask = (taskIdToBeChecked: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskIdToBeChecked)
    setTasks(filteredTasks)
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Input
            inputRef={newPlayerNameInputRef}
            value={newTaskValue}
            onChangeText={setNewTaskValue}
          />
          <Button onPress={addTask}>
            <Feather name="plus-circle" size={16} color="#f2f2f2" />
          </Button>
        </View>

        <List
          data={tasks}
          removeTask={removeTask}
          toggleTaskCheck={toggleTaskCheck}
        />
      </View>
    </View>
  )
}
