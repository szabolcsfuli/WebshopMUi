import React from 'react'
import Product from './Product'
import { Text, View } from 'react-native'
import { DUMMY_MEALS } from '../../data'
import styles from '../../styles/styles'

export default () => {
  return (
    <View style={styles.view}>
      {DUMMY_MEALS.map(item => (
        <Product key={item.id} item={item} />
      ))}
    </View>
  )
}
