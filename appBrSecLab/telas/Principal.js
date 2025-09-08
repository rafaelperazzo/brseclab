import { StyleSheet, SafeAreaView, Image, Linking } from 'react-native';
import { Text, Divider } from 'react-native-paper';
import { Button } from '@rn-vui/themed';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import * as Application from 'expo-application';
import { fetchData } from '../util/funcoes';

async function recarregarDados() {
  await fetchData('Pessoas','nome');
  await fetchData('Projetos','titulo');
}

export default function Principal({ navigation }) {
  const [carregando, setCarregando] = useState(false);
  const [desativado, setDesativado] = useState(true);
  useEffect(() => {
    async function baixarDados() {
      setCarregando(true);
      await fetchData('Pessoas','nome');
      await fetchData('Projetos','titulo');
      setCarregando(false);
      setDesativado(false);
    }
    
    baixarDados();
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.cabecalho}>
          <Image
            style={styles.logo}
            source={require('../assets/logo.jpg')}
            resizeMode='cover'
          >
          </Image>
      </SafeAreaView>
      <SafeAreaView style={styles.conteudo}>
        <Text variant='titleSmall'>Laboratório de CiberSegurança</Text>
        <Text variant='titleSmall'>Departamento de Computação - DC</Text>
        <Text variant='titleSmall'>Universidade Federal Rural de Pernambuco - UFRPE</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.botoes}>
        <Button buttonStyle={styles.botao} mode="contained" disabled={desativado}
            testID='botaoProjetos'
            onPress={() => navigation.navigate('Projetos') }>
            Projetos
        </Button>
        <Button buttonStyle={styles.botao} mode="contained" disabled={desativado}
            testID='botaoPessoas'
            onPress={() => navigation.navigate('Pessoas') }>
            Pessoas
        </Button>
        <Button buttonStyle={styles.botao} mode="contained" disabled={desativado}
            testID='botaoEventos'
            onPress={() => navigation.navigate('Eventos')}>
            Eventos
        </Button>
        <Button buttonStyle={styles.botao} mode="contained" disabled={desativado}
            testID='botaoPublicacoes'
            onPress={() => navigation.navigate('Publicacoes')}>
            Publicações
        </Button>
        <Button buttonStyle={styles.botao} mode="contained" disabled={desativado}
            testID='botaoRecursos'
            onPress={() => navigation.navigate('Recursos')}>
            Recursos
        </Button>
      </SafeAreaView>
      <ActivityIndicator animating={carregando} />
      <SafeAreaView style={styles.rodape}>
        <Divider />
        <Text variant='bodySmall'
              onPress={() => Linking.openURL('https://maps.app.goo.gl/EkaJtisTX6D7bFHi6')}
              style={{color: 'blue'}}>
              Departamento de Computação, 2o Andar, Sala 21
        </Text>
        <Text variant='bodySmall'>Rua Dom Manoel de Medeiros, s/n, Dois Irmãos, Recife, PE, Brasil</Text>
        <Text variant='bodySmall'>Versão: {Application.nativeApplicationVersion}</Text>
      </SafeAreaView>
      
    </SafeAreaView>
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
    margin: 30,
  },
  rodape: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: 10,
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
