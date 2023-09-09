import { Dispatch, RefObject, SetStateAction, useState } from 'react'
import { TextInput } from 'react-native'
import { styles } from './styles'

type Props = {
  inputRef: RefObject<TextInput>
  value: string
  onChangeText: Dispatch<SetStateAction<string>>
}

export const Input = ({ inputRef, value, onChangeText }: Props) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)

  const handleBlur = () => setIsFocused(false)

  return (
    <TextInput
      ref={inputRef}
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
