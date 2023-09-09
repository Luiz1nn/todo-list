import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#262626',
    borderColor: '#333333',
    borderWidth: 1,
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,
    borderRadius: 8,
    minHeight: 64,
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },
  checkbox: {
    height: 18,
    width: 18,
    borderWidth: 2,
    borderRadius: 9,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unchecked: {
    borderColor: '#4ea8de',
  },
  checked: {
    borderColor: '#8284fa',
    backgroundColor: '#8284fa',
  },
  text: {
    lineHeight: 19,
    flexShrink: 1,
  },
  textUnchecked: {
    color: '#f2f2f2',
  },
  textChecked: {
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  removeButton: {
    height: 38,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
