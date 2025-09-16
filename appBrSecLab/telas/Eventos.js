import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';
import { useEffect } from "react";

export default function Eventos() {
    useEffect(() => {
        async function baixarEventos() {
            
        }
        baixarEventos();
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>Eventos</Text>
                <Text>Em construção</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}