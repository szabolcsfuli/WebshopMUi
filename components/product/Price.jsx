import { Text } from 'react-native'
import Styles from '../../styles/styles'

export default ({ price, cls }) => {
  return (
    <Text style={cls ? Styles.totalPrice : Styles.price}>
      ${price.toFixed(2)}dddd
    </Text>
  )
}
