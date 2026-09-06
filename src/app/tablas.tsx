import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert} from 'react-native';

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
    let tabla = ''; 
    for (let i = 1; i <= 10; i++) { 
      tabla = tabla + i + ' x ' + num + ' = ' + (i * num) + '\n'; 
    } 
    setResultado(tabla); 
    };



  return (
    <View style={styles.container}>
      <Text>Ingresa el número de la tabla:</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />

      <Button title="Generar Tabla" onPress={calcular} />

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: 200,
    margin: 10,
    padding: 8,
  },
  resultado: {
    fontSize: 18,
    margin: 20,
    textAlign: 'center',
  },
});