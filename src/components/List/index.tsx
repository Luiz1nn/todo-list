import { Task } from '@/screens'
import { View } from 'react-native'
import { Empty } from './Empty'

type Props = {
  data: Task[]
  removeTask: (taskIdToBeRemoved: number) => void
  toggleTaskCheck: (taskIdToBeChecked: number) => void
}

export const List = ({ data, removeTask, toggleTaskCheck }: Props) => (
  <View>
    <Empty />
  </View>
)
