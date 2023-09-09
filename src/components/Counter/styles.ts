import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  descriptionCreated: {
    color: '#4ea8de',
  },
  descriptionFinished: {
    color: '#8284fa',
  },
  valueContainer: {
    width: 25,
    height: 19,
    backgroundColor: '#333333',
    borderRadius: 999,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#d9d9d9',
  },
})
