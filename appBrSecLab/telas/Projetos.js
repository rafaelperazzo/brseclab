import { useEffect } from "react";
import { Text, SafeAreaView } from "react-native";

export default function Projetos() {
    useEffect(() => {
        function baixarProjetos() {
            console.log('Projetos.js: Projetos');
        }
        //baixarProjetos();
    }, []);
    return (
        <SafeAreaView>
            <Text>Projetos</Text>
            <Text>Em construção</Text>
        </SafeAreaView>
    );
}