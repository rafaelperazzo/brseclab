import NetInfo from '@react-native-community/netinfo';
import supabase from '../database/database';
import { getData,getObject,storeData,storeObject,removeData } from '../telas/storage/Storage';

async function fetchData(tabela,ordem) {
    try {
        const state = await NetInfo.fetch();
        const atualizado = await getData('atualizado');
        if (atualizado!=null) {
            if (atualizado.substring(0,10)==new Date().toISOString().substring(0,10)) {
                let dados = await getObject(tabela);
                if (dados) {
                    return dados;
                }
                else {
                    console.log("Sem dados na base local");
                    return [];
                }
            }
        }
        else {   //Precisa atualizar dados
            if (state.isConnected) {
                let { data: Dados, error } = await supabase
                .from(tabela)
                .select('*').order(ordem);
                await storeObject(tabela,Dados);
                return Dados;
            } 
            else {
                console.log("Desconectado da internet");
                let dados = await getObject(tabela);
                if (dados) {
                    return dados;
                }
                else {
                    console.log("Sem dados na base local");
                    return [];
                }
            }
        }
    } catch (error) {
        console.log("Erro ao acessar a base de dados: ", error);
        return [];
    }
}

async function saveUpdateDate() {
    await storeData('atualizado',new Date().toISOString());
}

export {fetchData,saveUpdateDate};