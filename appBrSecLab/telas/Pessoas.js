import {ScrollView} from "react-native";
import { Text, Card,Avatar } from "react-native-paper";
import { useEffect, useState } from "react";

export default function Pessoas({route}) {
    const {dados} = route.params;
    const [pessoas, setPessoas] = useState(dados[1]);
    useEffect(() => {
        
    }, []);
    return (
        <ScrollView>
            <Card>
                <Card.Title
                    title={pessoas.nome}
                    subtitle={pessoas.afiliacao}
                    subtitleNumberOfLines={3}
                    titleVariant="titleLarge"
                    subtitleVariant="bodyMedium"
                    titleNumberOfLines={3}  
                    left={(props) => <Avatar.Image size={50} source={{uri: process.env.EXPO_PUBLIC_SUPABASE_STORAGE_URL + pessoas.avatar}} />}               
                />
                <Card.Content>
                    <Text variant="bodyMedium">{pessoas.contato}</Text>
                </Card.Content>
            </Card>
        </ScrollView>
    );
}