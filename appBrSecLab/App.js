import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Principal from './telas/Principal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Principal" 
            component={Principal} 
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

