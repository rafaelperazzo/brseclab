import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Principal from './telas/Principal';
import Projetos from './telas/Projetos';
import Pessoas from './telas/Pessoas';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Principal" 
            component={Principal} 
          />
          <Stack.Screen 
            name="Projetos" 
            component={Projetos}
          />
          <Stack.Screen
            name="Pessoas"
            component={Pessoas}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

