import { useEffect, useState } from "react";
import { Text, SafeAreaView,ScrollView } from "react-native";
import { ActivityIndicator, Card, Avatar } from "react-native-paper";
import { fetchData } from "../util/funcoes";
import { StyleSheet } from "react-native";

export default function Projetos() {
    const [projetos,setProjetos] = useState([]);
    const [carregando,setCarregando] = useState(true);
    useEffect(() => {
        async function baixarProjetos() {
            setCarregando(true);
            const dados = await fetchData('Projetos','titulo');
            setProjetos(dados);
            setCarregando(false);
        }
        baixarProjetos();
    }, []);
    return (
        <ScrollView>
            {projetos.map((projeto) => {
                return (
                    <SafeAreaView>
                        <Card style={styles.card}>
                            <Card.Title
                                title={projeto.titulo.toUpperCase()}
                                subtitle={projeto.coordenador}
                                subtitleNumberOfLines={3}
                                titleVariant="titleSmall"
                                subtitleVariant="bodySmall"
                                titleNumberOfLines={3}
                                left={(props) => <Avatar.Icon {...props} icon="brain" />}
                            />
                            <Card.Content>
                                <Text>{projeto.colaboradores}</Text>
                            </Card.Content>
                        </Card>
                    </SafeAreaView>
                );
            })}
            <ActivityIndicator animating={carregando} />
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
