import React, { useContext } from 'react'
import { Text } from 'react-native'
import styles from '../../styles/styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Wrap, Box, Flex } from '@react-native-material/core'
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
    <Wrap m={10} items='center' spacing={10}>
      <Box w={'10%'}>
        <Icon name={iconName} color='#ffffff' size={40}></Icon>
      </Box>
      <Box w={'20%'}>
        <Text style={styles.p}>{item.name}</Text>
      </Box>
      <Box w={'30%'}>
        <Text style={styles.listDesc}>{item.description}</Text>
      </Box>
      <Wrap fill justify='center'>
        <Price price={item.price} />
      </Wrap>
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
