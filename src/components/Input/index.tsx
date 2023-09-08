import { Dispatch, SetStateAction, useState } from 'react'
import { TextInput } from 'react-native'
import { styles } from './styles'

type Props = {
  value: string
  onChangeText: Dispatch<SetStateAction<string>>
}
export const Input = ({ value, onChangeText }: Props) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)

  const handleBlur = () => setIsFocused(false)

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor="#808080"
      style={isFocused ? { ...styles.input, ...styles.focused } : styles.input}
    />
  )
}
