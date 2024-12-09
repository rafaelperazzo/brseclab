import { SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import { useEffect, useState } from "react";

export default function Recursos() {
    useEffect(() => {
        async function baixarRecursos() {
            console.log('Recursos.js: Recursos');
        }
        baixarRecursos();
    }, []);

    return (
        <SafeAreaView>
            <Text>Recursos</Text>
            <Text>Em construção</Text>
        </SafeAreaView>
    );
}