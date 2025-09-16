import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';
import { useEffect } from "react";

export default function Publicacoes() {
    useEffect(() => {
        async function baixarPublicacoes() {
            
        }
        baixarPublicacoes();
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>Publicações</Text>
                <Text>Em construção</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}