import { View, Text } from 'react-native'
import React from 'react'
import { tabs } from '../../constants/tabs'

const TabContent = tabs.find(t => t.name === 'Search')?.component || (() => <View><Text>Search</Text></View>);

const Search = () => {
  return (
    <TabContent />
  )
}

export default Search
