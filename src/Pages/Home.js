import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
export default function Home () {
    
    let [cotacao, setCotacao] = useState();
    let [dolar, setDolar] = useState();
    let[result, setResult] = useState();

    function Converter(){

        let resultado = (result) = parseFloat(dolar) * parseFloat(cotacao);
        setResult(resultado);

        alert("O valor convertido de dólar em reais é: "+result);
    }

    return(
        <View style={styles.container}> 
            <Text style={styles.title}>Coverter Dólar</Text>

            <TextInput onChangeText={setCotacao} style={styles.input} placeholder="Digite a cotação do dia"></TextInput>
            <TextInput onChangeText={setDolar} style={styles.input} placeholder="Digite a qtnd de dólar"></TextInput>

            <TouchableOpacity  onPress={Converter} style={styles.button}>
                <Text style={styles.buttonText}>Converter</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#9BCD9B',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title:{
        fontSize: 25,
        color: '#FFF',
        fontWeight: 'bold',
        margin: 30
    },

    input:{
        backgroundColor: '#FFF',
        fontSize: 20,
        marginTop: 15,
        padding: 15,
        borderRadius: 10,
        textAlign: 'center'
    },
    
    button:{
        backgroundColor: '#008B45',
        padding: 15,
        marginTop: 40,
        borderRadius: 10,
        width: 100,
        alignItems: 'center'
    },

    buttonText:{
        fontSize: 15,
        color: '#FFF',
        fontWeight: 'bold'
    }
});