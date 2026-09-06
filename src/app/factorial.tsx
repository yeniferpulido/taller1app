
import { useState } from 'react';
import { ScrollView, Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Home() {

  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {

    // Validar que no esté vacío
    if (numero.trim() === '') {
      Alert.alert('Error', 'Por favor, ingresa un número.');
      return;
    }

    let num = Number(numero);

    // Validar que sea un número
    if (isNaN(num)) {
      Alert.alert('Error', 'Debes ingresar un número válido.');
      return;
    }

    // Validar que sea entero
    if (!Number.isInteger(num)) {
      Alert.alert('Error', 'Debes ingresar un número entero.');
      return;
    }

    // Validar que sea mayor o igual a 0
    if (num < 0) {
      Alert.alert('Error', 'El número debe ser mayor o igual a 0.');
      return;
    }

    let factorial = 1;
    let operacion = '';

    for (let i = num; i >= 1; i--) {

        factorial = factorial * i;

        if (i > 1) {
            operacion = operacion + i + 'x';
        } else {
            operacion = operacion + i;
        }
    }

    // Caso especial: 0! = 1
    if (num === 0) {
        operacion = '1';
    }

    setResultado(num + '!=' + operacion + '=' + factorial);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.titulo}>Calculadora de Factorial</Text>
        <Text>Ingresa un número entero:</Text>

        <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={numero}
            onChangeText={setNumero}
        />

        <Button
            color={"#8f1065"}
            title="Calcular Factorial"
            onPress={calcular}
        />
        
        <Text style={styles.resultado}>
            {resultado}
        </Text>

        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecc8c8',
        padding: 20,
        height: '100%',
    },

    titulo:{
        color: "#8f1065",
        fontSize: 32,
        marginBottom: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    input: {
        backgroundColor: '#dbabab',
        width: 200,
        height: 50,
        borderRadius: 12,
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 15,
    },

    resultado: {
        fontSize: 20,
        margin: 20,
        textAlign: 'center',
        width: '100%',
        paddingHorizontal: 10,
    },

});

