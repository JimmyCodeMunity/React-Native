import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './screens/homeScreen';
import { AntDesign } from '@expo/vector-icons';
import ShopScreen from './screens/Shop';
import Transactions from './screens/Transactions';
import Search from './screens/SearchPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';


//install the following components
//npm install react-native-gesture-handler react-native-reanimated
//npm install react-native-screens react-native-safe-area-context
//npm install @react-navigation/native @react-navigation/native-stack




const Stack = createNativeStackNavigator();


const App = ({navigation}) => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) =>({
        tabBarIcon:({focused,size,colour}) =>{
          let iconName;
          if(route.name === "Home"){
            iconName = focused ? 'home':'home-outline';
          }
          else if(route.name === "Search"){
            iconName = focused ? 'search':'search';
          }
          else if(route.name === "Transactions"){
            iconName = focused ? 'cog':'cog-outline';
          }
          return <Ionic name={iconName} size={size} colour={colour}/>;
        }
        
      })}>
        <Tab.Screen name="Home" component={HomePage} options={{headerShown:false}}/>
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Transactions" component={Transactions}/>
      </Tab.Navigator>
      
      
      //comments start here as this belongs to page navigation
      {/*<Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown:false}}
        />
        <Stack.Screen name="Shop" component={ShopScreen} />

        <Stack.Screen name="Transaction" component={Transactions} />

        <Stack.Screen name="SearchResults" component={Search}/>
    </Stack.Navigator>*/}
    
    //page nav comments end here
    </NavigationContainer>
    

  
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EFEF',
    
  },
});

export default App;
