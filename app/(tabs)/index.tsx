import { View, Text } from 'react-native'
import { tabs } from '../../constants/tabs'


// Find the component dynamically or fallback
const TabContent = tabs.find(t => t.name === 'index')?.component || (() => <View><Text>Home</Text></View>);

const Home = () => {
  return (
    <TabContent />
  )
}

export default Home
