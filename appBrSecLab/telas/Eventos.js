import { SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import { useEffect, useState } from "react";

export default function Eventos() {
    useEffect(() => {
        async function baixarEventos() {
            console.log('Eventos.js: Eventos');
        }
        baixarEventos();
    }, []);

    return (
        <SafeAreaView>
            <Text>Eventos</Text>
            <Text>Em construção</Text>
        </SafeAreaView>
    );
}