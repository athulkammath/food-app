import { View, Text } from 'react-native'
import React from 'react'
import { tabs } from '../../constants/tabs'

const TabContent = tabs.find(t => t.name === 'Cart')?.component || (() => <View><Text>Cart</Text></View>);

const Cart = () => {
    return (
        <TabContent />
    )
}

export default Cart
