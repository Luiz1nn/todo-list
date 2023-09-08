import { Image, Text, View } from 'react-native'
import { clipboardImg } from '@/assets'
import { styles } from './styles'

export const Empty = () => (
  <View style={styles.container}>
    <Image source={clipboardImg} alt="Clipboard Image" />
    <Text style={styles.boldText}>Você ainda não tem tarefas cadastradas</Text>
    <Text style={styles.normalText}>
      Crie tarefas e organize seus itens a fazer
    </Text>
  </View>
)
