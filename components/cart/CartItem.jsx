import styles from '../../styles/styles'
import { Text } from 'react-native'
import { Wrap, Box } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Price from '../product/Price'
import { CART_COLOR } from '../../styles'
import CartContext from '../../store/CartContext'
import { useContext } from 'react'

export default ({ index, item }) => {
  const ctx = useContext(CartContext)
  const onPressPlus = () => {
    ctx.addItem({ ...item, ...{ count: 1 } })
  }

  const onPressMinus = () => {
    ctx.removeItem({ ...item, ...{ count: 1 } })
  }

  return (
    <Wrap m={10} items='center' spacing={4}>
      <Box>
        <Text style={{ color: 'grey' }}>{index}</Text>
      </Box>
      <Box style={{flex: 1}}>
        <Text style={styles.p}>{item.name}</Text>
      </Box>
      <Box style={{flex: 1}}>
        <Price price={item.price} />
      </Box>
      <Wrap fill justify='center'>
        <Text style={styles.p}>{item.count}</Text>
      </Wrap>
      <Wrap >
        <Icon
          name='arrow-up-drop-circle'
          size={25}
          color={CART_COLOR}
          onPress={onPressPlus}
        />
        <Icon
          name='arrow-down-drop-circle'
          size={25}
          color={CART_COLOR}
          onPress={onPressMinus}
        />
      </Wrap>
    </Wrap>
  )
}
