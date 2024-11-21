import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { Button } from '@rneui/themed';
import Botao from '../componentes/Botao';

export default function Principal() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
          <Image
            style={styles.logo}
            source={require('../assets/logo.jpg')}
            resizeMode='cover'
          >
          </Image>
      </View>
      <View style={styles.conteudo}>
        <Text variant='titleSmall'>Laboratório de Segurança - Departamento de Computação - DC</Text>
        <Text variant='titleSmall'>Universidade Federal Rural de Pernambuco - UFRPE</Text>
      </View>
      <View style={styles.botoes}>
        <Button buttonStyle={styles.botao} mode="contained" 
            onPress={() => console.log('Pressed')}>
            Projetos
        </Button>
        <Button buttonStyle={styles.botao} mode="contained" 
            onPress={() => console.log('Pressed')}>
            Pessoas
        </Button>
        <Button buttonStyle={styles.botao} mode="contained" 
            onPress={() => console.log('Pressed')}>
            Eventos
        </Button>
        <Button buttonStyle={styles.botao} mode="contained" 
            onPress={() => console.log('Pressed')}>
            Publicações
        </Button>
        <Button buttonStyle={styles.botao} mode="contained" 
            onPress={() => console.log('Pressed')}>
            Recursos
        </Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cabecalho: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: 20,
  },
  conteudo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    marginTop: 20,
  },
  botoes: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
  logo: {
    width: '305',
    height: 159,
  },
  botao: {
    margin: 5,
  },
});
