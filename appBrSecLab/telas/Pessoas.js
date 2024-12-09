import {ScrollView, StyleSheet} from "react-native";
import { Text, Card,Avatar, Divider } from "react-native-paper";
import { useEffect, useState } from "react";

export default function Pessoas({route}) {
    const {dados} = route.params;
    const [pessoas, setPessoas] = useState(dados);
    useEffect(() => {
        
    }, []);
    return (
        <ScrollView>
            {pessoas.map((pessoa) => {
                return (
                    <Card style={styles.card}>
                        <Card.Title
                            title={pessoa.nome}
                            subtitle={pessoa.afiliacao}
                            subtitleNumberOfLines={3}
                            titleVariant="titleLarge"
                            subtitleVariant="bodyMedium"
                            titleNumberOfLines={3}
                            style={styles.titulo} 
                            subtitleStyle={styles.subtitulo} 
                            left={(props) => <Avatar.Image size={50} source={{uri: process.env.EXPO_PUBLIC_SUPABASE_STORAGE_URL + pessoa.avatar}} />}               
                        />
                        <Card.Content>
                            <Text style={styles.contato}>{pessoa.contato}</Text>
                            <Text style={styles.vinculo}>{pessoa.vinculo}</Text>
                        </Card.Content>
                    </Card>
                    
                );
            }
            )}
            
        </ScrollView>
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