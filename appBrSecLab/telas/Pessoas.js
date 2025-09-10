import {ScrollView, StyleSheet} from "react-native";
import { Text, Card,Avatar } from "react-native-paper";
import { useEffect, useState } from "react";
import { getObject } from "./storage/Storage";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Pessoas() {
    const [pessoas, setPessoas] = useState([]);
    useEffect(() => {
        async function carregarPessoas() {
            const pessoas = await getObject('Pessoas');
            setPessoas(pessoas);
        }
        carregarPessoas();
    }, []);
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }} edges={['right', 'top', 'left']}>
                    <ScrollView>
                            {pessoas.map((pessoa) => {
                                return (
                                    <SafeAreaView key={pessoa.id}>
                                        <Card style={styles.card}>
                                            <Card.Title
                                            title={pessoa.nome.toUpperCase()}
                                            subtitle={pessoa.afiliacao.toUpperCase()}
                                            subtitleNumberOfLines={3}
                                            titleVariant="titleLarge"
                                            subtitleVariant="bodyMedium"
                                            titleNumberOfLines={3}
                                            style={styles.titulo} 
                                            subtitleStyle={styles.subtitulo} 
                                            left={(props) => <Avatar.Image size={50} source={{uri: process.env.EXPO_PUBLIC_SUPABASE_STORAGE_URL + pessoa.avatar}} />}               
                                            />
                                            <Card.Content>
                                                <Text style={styles.contato}>{pessoa.contato.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1***@$2")}</Text>
                                                <Text style={styles.vinculo}>{pessoa.vinculo.toUpperCase()}</Text>
                                            </Card.Content>
                                        </Card>
                                    </SafeAreaView>
                        );
                    }
                    )}
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    vinculo: {
        fontSize: 16,
        color: "blue",
        textAlign: "center",
    },
    contato: {
        fontSize: 16,
        color: "green",
        textAlign: "center",
        fontWeight: "bold",
    },
    titulo: {
        fontWeight: "bold",
    },
    subtitulo: {
        fontWeight: "bold",
    },
    card: {
        margin: 10,
    },
});