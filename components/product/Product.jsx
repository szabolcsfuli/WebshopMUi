import React, { useContext } from 'react'
import { Text } from 'react-native'
import styles from '../../styles/styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Wrap, Box } from '@react-native-material/core'
import { CART_COLOR } from '../../styles'
import Price from './Price'
import CartContext from '../../store/CartContext'

export default ({ item }) => {
  const ctx = useContext(CartContext)
  let iconName
  switch (item.cat) {
    case 'fish':
      iconName = 'fish'
      break
    case 'burger':
      iconName = 'food'
      break
    default:
      iconName = 'food-steak'
  }

  return (
    <Wrap m={5} items='center' spacing={10}>
      <Box>
        <Icon name={iconName} color='#ffffff' size={35}></Icon>
      </Box>
      <Box style={{ flex: 1 }}>
        <Text style={styles.p}>{item.name}</Text>
      </Box>
      <Box style={{ flex: 1.5 }}>
        <Text style={styles.listDesc}>{item.description}</Text>
      </Box>
      <Box style={{ flex: 0.6 }}>
        <Price price={item.price} />
      </Box>
      <Icon
        name='cart'
        size={25}
        color={CART_COLOR}
        onPress={() => {
          ctx.addItem({ ...item, ...{ count: 1 } })
        }}
      />
    </Wrap>
  )
}
