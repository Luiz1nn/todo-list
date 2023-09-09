import { Task } from '@/screens'
import { View } from 'react-native'
import { Empty } from './Empty'
import { Header } from './Header'

type Props = {
  data: Task[]
  removeTask: (taskIdToBeRemoved: number) => void
  toggleTaskCheck: (taskIdToBeChecked: number) => void
}

export const List = ({ data, removeTask, toggleTaskCheck }: Props) => (
  <View>
    <Header data={data} />
    <Empty />
  </View>
)
