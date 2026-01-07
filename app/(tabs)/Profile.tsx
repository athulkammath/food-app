import { View, Text } from 'react-native'
import React from 'react'
import { tabs } from '../../constants/tabs'

const TabContent = tabs.find(t => t.name === 'Profile')?.component || (() => <View><Text>Profile</Text></View>);

const Profile = () => {
  return (
    <TabContent />
  )
}

export default Profile
