import { Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Task } from '@/screens'
import { styles } from './styles'

type Props = {
  item: Task
  removeTask: (taskIdBeRemoved: number) => void
  toggleTaskCheck: (taskIdToBeChecked: number) => void
}

export const Item = ({ item, removeTask, toggleTaskCheck }: Props) => {
  const handleRemoveTask = () => removeTask(item.id)

  const handleToggleTaskCheck = () => toggleTaskCheck(item.id)

  return (
    <TouchableOpacity style={styles.container} onPress={handleToggleTaskCheck}>
      <View style={styles.infoContainer}>
        {item.isChecked ? (
          <View style={{ ...styles.checkbox, ...styles.checked }}>
            <Feather name="check" color="#f2f2f2" />
          </View>
        ) : (
          <View style={{ ...styles.checkbox, ...styles.unchecked }} />
        )}

        <Text
          style={
            item.isChecked
              ? { ...styles.text, ...styles.textChecked }
              : { ...styles.text, ...styles.textUnchecked }
          }
        >
          {item.text}
        </Text>
      </View>

      <TouchableOpacity style={styles.removeButton} onPress={handleRemoveTask}>
        <Feather name="trash-2" size={16} color="#808080" />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}
