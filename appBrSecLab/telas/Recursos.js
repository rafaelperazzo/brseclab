import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';
import { useEffect } from "react";

export default function Recursos() {
    useEffect(() => {
        async function baixarRecursos() {
            console.log('Recursos.js: Recursos');
        }
        baixarRecursos();
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>Recursos</Text>
                <Text>Em construção</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}