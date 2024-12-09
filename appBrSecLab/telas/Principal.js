import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Image, Linking } from 'react-native';
import { Text, Divider } from 'react-native-paper';
import { Button } from '@rneui/themed';
import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import supabase from '../database/database';
import { ActivityIndicator } from 'react-native-paper';
import { getData,getObject,storeData,storeObject } from './storage/Storage';
import * as Application from 'expo-application';

export default function Principal({ navigation }) {
  const [carregando, setCarregando] = useState(true);
  const [desativado, setDesativado] = useState(true);
  const [pessoas, setPessoas] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        setCarregando(true);
        const state = await NetInfo.fetch();
        if (state.isConnected) {
          let { data: Pessoas, error } = await supabase
          .from('Pessoas')
          .select('*').order('nome');
          
          setCarregando(false);
          setDesativado(false);
          setPessoas(Pessoas);
          await storeObject('Pessoas',Pessoas);
          await storeData('atualizado',new Date().toISOString());
        } 
        else {
          console.log("Desconectado da internet");
          let dados = await getObject('Pessoas');
          if (dados) {
            setPessoas(dados);
            setCarregando(false);
            setDesativado(false);
          }
          else {
            console.log("Sem dados na base local");
            setCarregando(false);
            setDesativado(true);
          }
        }
      } catch (error) {
        console.log("Erro ao acessar a base de dados: ", error);
      }
    }
    fetchData();
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
            onPress={() => navigation.navigate('Projetos') }>
            Projetos
        </Button>
        <Button buttonStyle={styles.botao} mode="contained" disabled={desativado}
            onPress={() => navigation.navigate('Pessoas',{dados: pessoas}) }>
            Pessoas
        </Button>
        <Button buttonStyle={styles.botao} mode="contained" disabled={desativado}
            onPress={() => console.log('Pressed')}>
            Eventos
        </Button>
        <Button buttonStyle={styles.botao} mode="contained" disabled={desativado}
            onPress={() => console.log('Pressed')}>
            Publicações
        </Button>
        <Button buttonStyle={styles.botao} mode="contained" disabled={desativado}
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
      <StatusBar style="auto" />
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
