import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Principal from './telas/Principal';
import Projetos from './telas/Projetos';
import Pessoas from './telas/Pessoas';
import Recursos from './telas/Recursos';
import Eventos from './telas/Eventos';
import Publicacoes from './telas/Publicacoes';

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
          <Stack.Screen
            name="Recursos"
            component={Recursos}
          />
          <Stack.Screen
            name="Eventos"
            component={Eventos}
          />
          <Stack.Screen
            name="Publicacoes"
            component={Publicacoes}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

