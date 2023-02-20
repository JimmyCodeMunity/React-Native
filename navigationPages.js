import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import HomePage from './screens/homeScreen';
import { AntDesign } from '@expo/vector-icons';
//import ShopScreen from './screens/Shop';
//import Transactions from './screens/Transactions';
//import Search from './screens/SearchPage';


//install the following components
//npm install react-native-gesture-handler react-native-reanimated
//npm install react-native-screens react-native-safe-area-context
//npm install @react-navigation/native @react-navigation/native-stack




const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown:false}}
        />
        <Stack.Screen name="Shop" component={ShopScreen} />

        <Stack.Screen name="Transaction" component={Transactions} />
        //component has been extracted from the const /class of the page
        component name and the name should not be the same

        <Stack.Screen name="SearchResults" component={Search}/>
      </Stack.Navigator>
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
