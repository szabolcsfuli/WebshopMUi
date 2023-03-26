import { useContext } from 'react'
import { View, Text, ScrollView } from 'react-native'
import CartContext from '../../store/CartContext'
import CartItem from './CartItem'
import styles from '../../styles/styles'
import Price from '../product/Price'
import { Stack, HStack, VStack, Box } from 'react-native-flex-layout'

export default () => {
  const ctx = useContext(CartContext)
  return (
    <View style={styles.view}>
      <ScrollView >
        {ctx.items.map((item, index) => (
          <CartItem key={item.id} index={index + 1} item={item}></CartItem>
        ))}
      </ScrollView>
      <VStack fill justify='end'>
        <Box style={{ marginBottom: 10 }}>
          <Text style={styles.total}>Total Price</Text>
          <Price price={ctx.totalAmount} cls='totalPrice' />
        </Box>
      </VStack> 
    </View>
  )
}
