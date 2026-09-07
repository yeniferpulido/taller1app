import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Home() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => { 
    // Validar que se haya ingresado algo 
    if (numero.trim() === '') {
     Alert.alert('Error', 'Por favor, ingresa un número.'); 
     return; } 

     // Convertir a número 
     let num = Number(numero); 

     // Validar que realmente sea un número
     if (isNaN(num)) { 
      Alert.alert('Error', 'Debes ingresar un número válido.'); 
      return; }

      // Variable donde vamos a guardar toda la tabla
    let tabla = ''; 


    for (let i = 1; i <= 10; i++) { 
      // Se construye cada línea de la tabla
      tabla = tabla + i + ' x ' + num + ' = ' + (i * num) + '\n'; 
    } 
    setResultado(tabla); 
    };



  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tablas de Multiplicar del 1 al 10</Text>
      <Text>Ingresa el número de la tabla:</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />

      <Button
        color={"#a96d1c"}
        title="Generar Tabla" 
        onPress={calcular} 
      />

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#faebb9',
        padding: 20,
        height: '100%',
    },

    titulo:{
        color: "rgb(177, 100, 11)",
        fontSize: 32,
        marginBottom: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    input: {
        backgroundColor: '#f0bb77',
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