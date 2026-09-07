import { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
 
export default function Home() { 
 
  const [numero, setNumero] = useState(''); 
  const [resultado, setResultado] = useState(''); 
 
  const calcular = () => { 
 
    if (numero.trim() === '') { 
      Alert.alert('Error', 'Por favor, ingresa una cantidad.'); 
      return; 
    } 
     
    let cantidad = Number(numero); 
 
    if (cantidad <= 0) { 
      Alert.alert('Error', 'Ingresa una cantidad mayor que 0.'); 
      return; 
    } 
 
    if (isNaN(cantidad)) { 
    Alert.alert('Error', 'Debes ingresar un número válido.'); 
    return; 
    } 

    //primer numero de fibonacci es 0 y el segundo es 1,  
    // luego se suman los dos anteriores para obtener el siguiente 
    let a = 0; 
    let b = 1; 
    let serie = ''; 
 
    for (let i = 0; i < cantidad; i++) { 
 
      //si no es el ultimo numero de la serie, se agrega una coma y un espacio 
      if (i < cantidad - 1) { 
      serie = serie + a + ', '; 
      } else { 
      serie = serie + a;  
      } 
 
      //se calcula el siguiente numero de fibonacci sumando los dos anteriores 
      let siguiente = a + b; 
      a = b; 
      b = siguiente; 
    } 
 
    setResultado(serie); 
  }; 
 
  return ( 
    <ScrollView style={styles.scroll}>
    <View style={styles.container}> 
      <Text style={styles.titulo}>Calculadora de Fibonacci</Text> 
      <Text>¿Cuántos números quieres?</Text> 
 
      <TextInput 
        style={styles.input} 
        keyboardType="numeric" 
        value={numero} 
        onChangeText={setNumero} 
        selectionColor="#000000"  
      /> 
 
      <Button 
        color={"#108b8f"} 
        title="Generar Fibonacci" 
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
        backgroundColor: '#d8f8ef', 
        padding: 20, 
        height: '100%', 
    }, 
 
    titulo:{ 
        color: "#108f8f", 
        fontSize: 32, 
        marginBottom: 32, 
        fontWeight: 'bold', 
        textAlign: 'center', 
    }, 
 
    input: { 
        backgroundColor: '#abdbcd', 
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

     scroll: {
    backgroundColor: '#d8f8ef',
  },
 
});