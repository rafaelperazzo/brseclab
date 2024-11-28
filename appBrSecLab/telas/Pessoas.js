import { useEffect } from "react";
import {SafeAreaView,Text} from "react-native";

export default function Pessoas({route}) {
    const {dados} = route.params;

    return (
        <SafeAreaView>
            <Text>Pessoas</Text>
            <Text>Em construção</Text>
        </SafeAreaView>
    );
}