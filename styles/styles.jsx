import { StyleSheet } from 'react-native'
import { GREEN } from '../styles'

const styles = StyleSheet.create({
  total: {
    fontSize: 30,
    color: GREEN,
    textAlign: 'center'
  },
  totalPrice: {
    color: '#ff1493',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center'
  },
  price: {
    color: '#ff1493',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view: {
    padding: 10,
    backgroundColor: 'black',
    flex: 1
  },
  listDesc: {
    color: 'grey',
    fontSize: 10
  },
  p: {
    color: GREEN
  }
})

export default styles
