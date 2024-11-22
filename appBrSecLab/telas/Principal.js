import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { Button } from '@rneui/themed';
import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import supabase from '../database/database';

export default function Principal({ navigation }) {
  
  useEffect(() => {
    async function fetchData() {
      try {
        const state = await NetInfo.fetch();
        if (state.isConnected) {
          console.log("Conectado à internet");
          /*let { data: Pessoas, error } = await supabase
          .from('Pessoas')
          .select('*')
          console.log("Pessoas: ", Pessoas);*/
        } 
        else {
          console.log("Desconectado da internet");
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
        <Text variant='titleSmall'>Laboratório de Segurança - Departamento de Computação - DC</Text>
        <Text variant='titleSmall'>Universidade Federal Rural de Pernambuco - UFRPE</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.botoes}>
        <Button buttonStyle={styles.botao} mode="contained" 
            onPress={() => navigation.navigate('Projetos') }>
            Projetos
        </Button>
        <Button buttonStyle={styles.botao} mode="contained" 
            onPress={() => navigation.navigate('Pessoas') }>
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
