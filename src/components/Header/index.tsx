import { Image, View } from 'react-native'
import { logoImg } from '@/assets'
import { styles } from './styles'

export const Header = () => (
  <View style={styles.container}>
    <Image source={logoImg} alt="Logo" />
  </View>
)
