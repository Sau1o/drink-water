import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const Screen = ({text})=>{
    return(
        <View>
            <Text>{text}</Text>
        </View>
    )
}

export function MyTabs() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name="Home" component={<Screen text='Homepage' />} />
            <Tab.Screen name="Profile" component={<Screen text='Settings' />} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}