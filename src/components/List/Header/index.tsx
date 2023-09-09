import { Counter } from '@/components'
import { Task } from '@/screens'
import { useMemo } from 'react'
import { View } from 'react-native'
import { styles } from './styles'

type Props = {
  data: Task[]
}

export const Header = ({ data }: Props) => {
  const checkedDataCounter = useMemo(() => {
    const filteredCheckedData = data.filter((item) => item.isChecked)
    return filteredCheckedData.length
  }, [data])

  return (
    <View style={styles.container}>
      <Counter description="Criadas" value={data.length} isFinished={false} />
      <Counter description="Concluídas" value={checkedDataCounter} isFinished />
    </View>
  )
}
