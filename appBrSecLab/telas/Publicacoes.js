import { SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import { useEffect, useState } from "react";

export default function Publicacoes() {
    useEffect(() => {
        async function baixarPublicacoes() {
            console.log('Publicacoes.js: Publicações');
        }
        baixarPublicacoes();
    }, []);

    return (
        <SafeAreaView>
            <Text>Publicações</Text>
            <Text>Em construção</Text>
        </SafeAreaView>
    );
}