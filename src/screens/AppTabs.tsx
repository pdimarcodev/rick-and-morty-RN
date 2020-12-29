import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppParamList} from '../AppParamList';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CharactersStack} from './CharactersStack';

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

// function Characters() {
//   return (
//     <View>
//       <Text>Characters</Text>
//     </View>
//   );
// }
function Locations() {
  return (
    <View>
      <Text>Locations</Text>
    </View>
  );
}

const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({color, size }) => {
          let iconName;

          if (route.name === 'Characters') {
            iconName = 'people';
          } else if (route.name === 'Locations') {
            iconName = 'md-locate-sharp'
          }

          // You can return any component that you like here!
          if (iconName !== undefined) {
          return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="Characters" component={CharactersStack} />
      <Tabs.Screen name="Locations" component={Locations} />
    </Tabs.Navigator>
  );
};

export default AppTabs;
