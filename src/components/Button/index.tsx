import { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'
import { styles } from './styles'

type Props = {
  children: ReactNode
  onPress: () => void
}
export const Button = ({ children, onPress }: Props) => (
  <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.6}>
    {children}
  </TouchableOpacity>
)
